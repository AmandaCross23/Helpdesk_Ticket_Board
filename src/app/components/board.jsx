'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';
import { statuses, priorities } from '../lib/severity';

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({ status: 'All', priority: 'All' });
  const [search, setSearch] = useState('');
  const [queue, setQueue] = useState({}); 
  const liveTimerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchTickets() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/tickets');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!cancelled) {
          setTickets(data);
        }
      } catch (err) {
        if (!cancelled) setError(err.message || 'Unable to fetch');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchTickets();
    return () => { cancelled = true; };
  }, []);

  const applyRandomUpdate = useCallback(() => {
    setTickets(prev => {
      if (!prev || prev.length === 0) return prev;
      const idx = Math.floor(Math.random() * prev.length);
      const ticket = prev[idx];
      const copy = [prev];
      const now = new Date().toISOString();

      if (Math.random() < 0.6) {

        const statusTransitions = {
          'Open': 'In Progress',
          'In Progress': Math.random() < 0.4 ? 'Resolved' : 'On Hold',
          'On Hold': 'In Progress',
          'Resolved': 'Resolved'
        };
        const next = statusTransitions[ticket.status] || ticket.status;
        copy[idx] = { ...ticket, status: next, updatedAt: now };
      } else {
        const order = ['Low', 'Medium', 'High', 'Critical'];
        const curIndex = order.indexOf(ticket.priority);
        if (curIndex === -1) {
          copy[idx] = {ticket, updatedAt: now };
        } else {
          const dir = Math.random() < 0.5 ? -1 : 1;
          const nextIndex = Math.min(order.length - 1, Math.max(0, curIndex + dir));
          copy[idx] = {ticket, priority: order[nextIndex], updatedAt: now };
        }
      }
      return copy;
    });
  }, []);

  useEffect(() => {
    function scheduleOnce() {
      const delay = 6000 + Math.floor(Math.random() * 4000);
      liveTimerRef.current = setTimeout(() => {
        applyRandomUpdate();
        scheduleOnce();
      }, delay);
    }
    scheduleOnce();
    return () => {
      if (liveTimerRef.current) clearTimeout(liveTimerRef.current);
    };
  }, [applyRandomUpdate]);

  const visibleTickets = tickets.filter(t => {
    if (filters.status !== 'All' && t.status !== filters.status) return false;
    if (filters.priority !== 'All' && t.priority !== filters.priority) return false;
    const q = search.trim().toLowerCase();
    if (q) {
      const hay = `${t.title} ${t.description}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  const onStatusChange = (value) => setFilters(prev => ({ ...prev, status: value }));
  const onPriorityChange = (value) => setFilters(prev => ({ ...prev, priority: value }));
  const onSearchChange = (value) => setSearch(value);

  const addToQueue = (ticketId) => {
    setQueue(prev => ({ ...prev, [ticketId]: true }));
  };
  const removeFromQueue = (ticketId) => {
    setQueue(prev => {
      const copy = { ...prev };
      delete copy[ticketId];
      return copy;
    });
  };
  const clearQueue = () => setQueue({});

  const queuedTicketObjects = Object.keys(queue).map(id => tickets.find(t => t.id === id)).filter(Boolean);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <section className="lg:col-span-3">
        <div className="flex flex-wrap gap-3 items-center mb-4">
          <StatusFilter value={filters.status} onChange={onStatusChange} />
          <PriorityFilter value={filters.priority} onChange={onPriorityChange} />
          <SearchBox value={search} onChange={onSearchChange} />
        </div>

        <StatusMessage loading={loading} error={error} isEmpty={!loading && !error && visibleTickets.length === 0} />

        {!loading && !error && (
          <TicketList tickets={visibleTickets} onAddToQueue={addToQueue} queue={queue} />
        )}
      </section>

      <aside className="lg:col-span-1">
        <MyQueueSummary
          queued={queuedTicketObjects}
          removeFromQueue={removeFromQueue}
          clearQueue={clearQueue}
        />
        <div className="mt-6 text-sm text-gray-600">
          <strong>Filters:</strong>
          <ul className="mt-2">
            <li>Status: {filters.status}</li>
            <li>Priority: {filters.priority}</li>
            <li>Search: {search || '—'}</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
