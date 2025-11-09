'use client';
import React from 'react';

function prettyDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleString();
  } catch {
    return iso;
  }
}

export default function TicketCard({ ticket, onAdd, queued }) {
  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{ticket.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{ticket.description}</p>
        </div>
        <div className="text-right text-sm">
          <div className="mb-1">
            <span className="inline-block px-2 py-0.5 rounded text-xs border">
              {ticket.priority}
            </span>
          </div>
          <div className="mb-1">
            <span className="text-xs">{ticket.status}</span>
          </div>
          <div className="text-xs text-gray-500">{ticket.assignee}</div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="text-xs text-gray-500">Updated: {prettyDate(ticket.updatedAt)}</div>
        <div className="flex items-center gap-2">
          <button
            onClick={onAdd}
            disabled={queued}
            className={`px-3 py-1 rounded border text-sm ${queued ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            {queued ? 'Added' : 'Add to My Queue'}
          </button>
          {queued && <div className="text-xs text-green-600">In My Queue</div>}
        </div>
      </div>
    </div>
  );
}
