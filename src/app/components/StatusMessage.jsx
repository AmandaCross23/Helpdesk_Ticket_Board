'use client';
import React from 'react';

export default function StatusMessage({ loading, error, isEmpty }) {
  if (loading) {
    return <div className="p-4 text-center text-gray-600">Loading…</div>;
  }
  if (error) {
    return <div className="p-4 text-center text-red-600">Unable to load tickets.</div>;
  }
  if (isEmpty) {
    return <div className="p-4 text-center text-gray-600">No tickets match your filters.</div>;
  }
  return null;
}
