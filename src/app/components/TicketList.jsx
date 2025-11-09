'use client';
import React from 'react';
import TicketCard from './TicketCard';

export default function TicketList({ tickets, onAddToQueue, queue }) {
  return (
    <div className="space-y-3">
      {tickets.map(ticket => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          onAdd={() => onAddToQueue(ticket.id)}
          queued={!!queue[ticket.id]}
        />
      ))}
    </div>
  );
}
