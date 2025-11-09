'use client';

import React from 'react';

export default function MyQueueSummary({ queued = [], removeFromQueue, clearQueue }) {
  return (
    <div className="border rounded p-4 bg-gray-50">
      <h3 className="font-semibold">My Queue</h3>
      <p className="text-sm text-gray-600">Tickets selected: {queued.length}</p>

      <div className="mt-3 space-y-2">
        {queued.length === 0 && <div className="text-sm text-gray-500">No tickets selected.</div>}
        {queued.map(ticket => (
          <div key={ticket.id} className="flex items-center justify-between bg-white p-2 rounded border">
            <div className="text-sm">
              <div className="font-medium">{ticket.title}</div>
              <div className="text-xs text-gray-500">{ticket.id} • {ticket.priority}</div>
            </div>
            <div>
              <button
                onClick={() => removeFromQueue(ticket.id)}
                className="text-sm px-2 py-1 border rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <button
          onClick={clearQueue}
          className="w-full px-3 py-2 border rounded text-sm"
          disabled={queued.length === 0}
        >
          Clear Queue
        </button>
      </div>
    </div>
  );
}
