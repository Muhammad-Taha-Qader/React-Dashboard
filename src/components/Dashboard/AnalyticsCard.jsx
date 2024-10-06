// import React from 'react';

const AnalyticsCard = ({ icon: Icon, title, value, change, changeType }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center">
        <Icon className="text-blue-500 w-8 h-8" />
        <div className="ml-4">
          <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
          <h2 className="text-2xl font-bold">{value}</h2>
          <p className={`text-sm ${changeType === 'negative' ? 'text-red-500' : 'text-green-500'}`}>
            {change} Since last week
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
