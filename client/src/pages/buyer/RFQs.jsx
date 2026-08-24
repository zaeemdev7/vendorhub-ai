// src/pages/buyer/RFQs.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Filter, Search } from 'lucide-react';
import RFQCard from '../../components/buyer/rfq/RFQCard';

const RFQs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  // Mock data - replace with API
  const rfqs = [
    { id: 1, title: 'Cotton T-Shirts 10,000 pcs', status: 'active', date: '2024-01-15', quantity: 10000, unit: 'pcs', budget: 25000, quotesCount: 3 },
    { id: 2, title: 'Stainless Steel Pipes', status: 'pending', date: '2024-01-14', quantity: 500, unit: 'kg', budget: 5000, quotesCount: 0 },
    { id: 3, title: 'LED Lighting Fixtures', status: 'quotes', date: '2024-01-13', quantity: 200, unit: 'sets', budget: 8000, quotesCount: 5 },
    { id: 4, title: 'Packaging Materials', status: 'closed', date: '2024-01-12', quantity: 1000, unit: 'pcs', budget: 2000, quotesCount: 2 },
  ];

  const filteredRFQs = rfqs.filter(rfq => {
    const matchesSearch = rfq.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || rfq.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">My RFQs</h1>
            <p className="text-gray-600 mt-1">Manage your requests for quotations</p>
          </div>
          <Link
            to="/buyer/new-rfq"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
          >
            <Plus size={20} />
            New RFQ
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search RFQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              {['all', 'active', 'pending', 'quotes', 'closed'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all
                    ${filter === status ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                  `}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RFQ List */}
        <div className="space-y-4">
          {filteredRFQs.length > 0 ? (
            filteredRFQs.map((rfq) => (
              <RFQCard key={rfq.id} rfq={rfq} />
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
              <p className="text-gray-500">No RFQs found</p>
              <Link to="/buyer/new-rfq" className="text-blue-600 hover:text-blue-700 font-medium mt-2 inline-block">
                Create your first RFQ
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RFQs;