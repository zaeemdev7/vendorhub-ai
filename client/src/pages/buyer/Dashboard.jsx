import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Clock, 
  Package, 
  Star, 
  Sparkles, 
  Search, 
  DollarSign,
  ArrowRight,
  PlusCircle
} from 'lucide-react';
import QuickStats from '../../components/buyer/dashboard/QuickStats';
import SpendingChart from '../../components/buyer/dashboard/SpendingChart';
import RecentActivity from '../../components/buyer/dashboard/RecentActivity';
import DashboardWidgets from '../../components/buyer/dashboard/DashboardWidgets';

const BuyerDashboard = () => {
  // Mock data - replace with API calls later
  const stats = {
    activeRFQs: 5,
    pendingQuotes: 3,
    orders: 12,
    savedVendors: 8,
    monthlySpending: 24500,
    savings: 3200
  };

  const recentRFQs = [
    { id: 1, title: 'Cotton T-Shirts 10,000 pcs', status: 'pending', date: '2024-01-15' },
    { id: 2, title: 'Stainless Steel Pipes', status: 'active', date: '2024-01-14' },
    { id: 3, title: 'LED Lighting Fixtures', status: 'quotes', date: '2024-01-13' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your sourcing</p>
        </div>
        <Link
          to="/buyer/new-rfq"
          className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
        >
          <PlusCircle size={20} />
          Create New RFQ
        </Link>
      </div>

      {/* Quick Stats */}
      <QuickStats stats={stats} />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Left Column - Widgets */}
        <div className="lg:col-span-2 space-y-6">
          {/* AI Recommendations */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Sparkles className="text-teal-500" size={20} />
                AI Recommendations
              </h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                View All <ArrowRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Premium Fabric Supplier', 'Eco-friendly Packaging', 'Fast Shipping Partner'].map((rec, idx) => (
                <div key={idx} className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-4 border border-blue-100 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-gray-800">{rec}</h4>
                      <p className="text-sm text-gray-600 mt-1">Match Score: 94%</p>
                    </div>
                    <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded-full">AI Pick</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Searches */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Search size={20} className="text-blue-600" />
                Recent Searches
              </h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Clear History</button>
            </div>
            <div className="space-y-3">
              {['Stainless steel manufacturer in Turkey', 'Cotton fabric suppliers India', 'LED lighting China'].map((search, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-gray-700">{search}</span>
                  <span className="text-gray-400 text-sm">2 days ago</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Recent Activity */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <Clock size={20} className="text-blue-600" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentRFQs.map((rfq) => (
                <div key={rfq.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">{rfq.title}</p>
                    <p className="text-sm text-gray-500">{rfq.date}</p>
                  </div>
                  <span className={`
                    px-3 py-1 rounded-full text-xs font-medium
                    ${rfq.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                    ${rfq.status === 'active' ? 'bg-blue-100 text-blue-800' : ''}
                    ${rfq.status === 'quotes' ? 'bg-green-100 text-green-800' : ''}
                  `}>
                    {rfq.status.charAt(0).toUpperCase() + rfq.status.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Spending Summary */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-sm p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Monthly Spending</h3>
            <p className="text-3xl font-bold">$24,500</p>
            <p className="text-sm text-blue-200 mt-1">↑ 12% from last month</p>
            <div className="mt-4 flex items-center gap-2 text-sm bg-white/10 rounded-lg p-3">
              <DollarSign size={16} />
              <span>You've saved $3,200 using AI recommendations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;