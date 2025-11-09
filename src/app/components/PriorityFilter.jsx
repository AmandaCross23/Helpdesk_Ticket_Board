'use client';
import React from 'react';
import { priorities } from '../lib/severity';

export default function PriorityFilter({ value, onChange }) {
  return (
    <label className="flex items-center gap-2">
      <span className="text-sm">Priority</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded px-2 py-1"
      >
        {priorities.map(p => <option key={p} value={p}>{p}</option>)}
      </select>
    </label>
  );
}
