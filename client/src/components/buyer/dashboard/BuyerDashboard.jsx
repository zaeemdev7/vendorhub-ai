import React from 'react';
import DashboardWidgets from './DashboardWidgets';
import SpendingSummary from './SpendingChart';
import RecentSearches from './RecentActivity';

const BuyerDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1F2937]">Buyer Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's your procurement overview</p>
        </div>

        {/* Widgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardWidgets />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentSearches />
          </div>
          <div className="lg:col-span-1">
            <SpendingSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;