import React from 'react';

const StepTracker = ({ steps }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <ul className="space-y-6">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`flex items-center space-x-4 p-4 rounded-lg ${
              step.status === 'completed'
                ? 'bg-green-100'
                : step.status === 'current'
                ? 'bg-blue-100'
                : 'bg-yellow-100'
            }`}
          >
            {/* Circle Indicator */}
            <div
              className={`w-6 h-6 rounded-full ${
                step.status === 'completed'
                  ? 'bg-green-500'
                  : step.status === 'current'
                  ? 'bg-blue-500'
                  : 'bg-yellow-500'
              }`}
            ></div>
            <div className="flex-1">
              <div className="font-semibold text-gray-800">{step.label}</div>
              {step.dateTime && <div className="text-sm text-gray-600">{step.dateTime}</div>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepTracker;
