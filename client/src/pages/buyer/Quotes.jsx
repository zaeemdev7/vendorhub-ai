// src/pages/buyer/Quotes.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Clock, Package, CheckCircle, XCircle, Eye } from 'lucide-react';

const Quotes = () => {
  const [filter, setFilter] = useState('all');

  // Mock data - replace with API
  const quotes = [
    { 
      id: 1, 
      vendor: 'Premium Textiles', 
      price: 2.50, 
      delivery: 15, 
      status: 'pending',
      rfq: 'Cotton T-Shirts 10,000 pcs',
      date: '2024-01-15'
    },
    { 
      id: 2, 
      vendor: 'Global Manufacturing', 
      price: 2.30, 
      delivery: 20, 
      status: 'received',
      rfq: 'Cotton T-Shirts 10,000 pcs',
      date: '2024-01-14'
    },
    { 
      id: 3, 
      vendor: 'FastEx Imports', 
      price: 2.80, 
      delivery: 10, 
      status: 'received',
      rfq: 'LED Lighting Fixtures',
      date: '2024-01-13'
    },
    { 
      id: 4, 
      vendor: 'EcoTextile Co.', 
      price: 2.60, 
      delivery: 18, 
      status: 'accepted',
      rfq: 'Cotton T-Shirts 10,000 pcs',
      date: '2024-01-12'
    },
  ];

  const filteredQuotes = quotes.filter(q => filter === 'all' || q.status === filter);

  const getStatusBadge = (status) => {
    const configs = {
      pending: { color: 'bg-yellow-100 text-yellow-800', icon: Clock },
      received: { color: 'bg-blue-100 text-blue-800', icon: Eye },
      accepted: { color: 'bg-green-100 text-green-800', icon: CheckCircle },
      rejected: { color: 'bg-red-100 text-red-800', icon: XCircle }
    };
    const config = configs[status] || configs.pending;
    const Icon = config.icon;
    return (
      <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${config.color}`}>
        <Icon size={14} />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Quotes</h1>
            <p className="text-gray-600 mt-1">Manage vendor quotations</p>
          </div>
          <Link
            to="/buyer/compare-quotes"
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
          >
            Compare Quotes <ArrowRight size={20} />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {['all', 'pending', 'received', 'accepted', 'rejected'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all
                ${filter === status ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}
              `}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuotes.map((quote) => (
            <div key={quote.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">{quote.vendor}</h3>
                  <p className="text-sm text-gray-500 mt-1">{quote.rfq}</p>
                </div>
                {getStatusBadge(quote.status)}
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 flex items-center gap-2">
                    <DollarSign size={16} className="text-blue-600" />
                    Price
                  </span>
                  <span className="font-medium text-gray-800">${quote.price.toFixed(2)}/unit</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 flex items-center gap-2">
                    <Clock size={16} className="text-blue-600" />
                    Delivery
                  </span>
                  <span className="font-medium text-gray-800">{quote.delivery} days</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 flex items-center gap-2">
                    <Package size={16} className="text-blue-600" />
                    Date
                  </span>
                  <span className="font-medium text-gray-800">{quote.date}</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>

        {filteredQuotes.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
            <p className="text-gray-500">No quotes found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quotes;