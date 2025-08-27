'use client';

import { useState } from 'react';
import StepTracker from '../component/ui/StepTracker';

const sampleSteps = [
  {
    label: "Application Submitted",
    status: "completed",
    dateTime: "2025-03-31 08:00 AM",
  },
  {
    label: "Application Under Review",
    status: "pending",
  },
  { label: "Approved", status: "pending" },
  { label: "Application Finalized", status: "pending" },
];

export default function TrackMyApplication() {
  const [steps, setSteps] = useState(sampleSteps);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Track My Application</h1>

      <StepTracker steps={steps} />
    </div>
  );
}
