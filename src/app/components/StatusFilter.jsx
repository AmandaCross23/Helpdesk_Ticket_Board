'use client';
import React from 'react';
import { statuses } from '../lib/severity';

export default function StatusFilter({ value, onChange }) {
  return (
    <label className="flex items-center gap-2">
      <span className="text-sm">Status</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded px-2 py-1"
      >
        {statuses.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
    </label>
  );
}
