'use client';
import React from 'react';

export default function SearchBox({ value, onChange }) {
  return (
    <div className="flex items-center gap-2 ml-auto">
      <input
        type="text"
        placeholder="Search title or description..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded px-3 py-2 w-full md:w-80"
      />
      <button
        type="button"
        onClick={() => onChange('')}
        className="px-3 py-2 border rounded"
      >
        Clear
      </button>
    </div>
  );
}
