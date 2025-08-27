'use client';

import { useState } from 'react';
import StepTracker from '../component/ui/StepTracker'; // Adjust the path if needed

// Sample steps for the Journey Tracker
export const sampleSteps = [
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

export default function ApplyAsPlanholder() {
  const [formData, setFormData] = useState({
    lpano: '',
    firstName: '',
    lastName: '',
    birthdate: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission
  const [steps, setSteps] = useState([]); // Manage steps dynamically, initially empty

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Trigger the journey tracker display after form submission
    console.log('Form Submitted:', formData);

    // Set the steps after the form submission
    setSteps([
      {
        label: "Application Submitted",
        status: "completed",
        dateTime: new Date().toLocaleString(), // Use current time as dateTime
      },
      {
        label: "Application Under Review",
        status: "pending",
      },
      {
        label: "Approved",
        status: "pending",
      },
      {
        label: "Application Finalized",
        status: "pending",
      },
    ]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Welcome to St Peter</h1>
      
      {/* Form for applying */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="lpano" className="block text-sm font-medium text-gray-700">LPANO:</label>
          <input
            type="text"
            id="lpano"
            name="lpano"
            value={formData.lpano}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">Birthdate:</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md mt-4"
        >
          Submit Application
        </button>
      </form>

      {/* Conditionally render the Journey Tracker after form submission */}
      {isSubmitted && (
        <div className="flex flex-col items-center justify-center mt-8 w-full max-w-md bg-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Track My Application</h2>
          <StepTracker steps={steps} />
        </div>
      )}
    </div>
  );
}
