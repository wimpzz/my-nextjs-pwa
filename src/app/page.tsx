'use client';
import React, { JSX } from 'react';
import { useRouter } from 'next/navigation';

export default function Home(): JSX.Element {
  const router = useRouter();

  const handleApplyNow = (): void => {
    router.push('/apply');
  };

  const handleTrackApplication = (): void => {
    router.push('/track');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">St Peter Loan Application</h1>

      <div className="flex space-x-4">
        <button
          onClick={handleApplyNow}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Apply Now
        </button>

        <button
          onClick={handleTrackApplication}
          className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Track My Application
        </button>
      </div>
    </div>
  );
}
