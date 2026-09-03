// src/components/buyer/rfq/RFQCard.jsx
import React from 'react';
import { FileText, Clock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const RFQCard = ({ rfq }) => {
  const statusColors = {
    draft: 'bg-gray-100 text-gray-800',
    pending: 'bg-yellow-100 text-yellow-800',
    active: 'bg-blue-100 text-blue-800',
    quotes: 'bg-green-100 text-green-800',
    closed: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-50 rounded-lg">
            <FileText size={24} className="text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{rfq.title}</h3>
            <p className="text-sm text-gray-500 mt-1">RFQ #{rfq.id}</p>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-sm text-gray-600">
                Quantity: {rfq.quantity} {rfq.unit}
              </span>
              <span className="text-sm text-gray-600">
                Budget: ${rfq.budget}
              </span>
            </div>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[rfq.status]}`}>
          {rfq.status.charAt(0).toUpperCase() + rfq.status.slice(1)}
        </span>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {rfq.date}
          </span>
          <span>{rfq.quotesCount || 0} quotes received</span>
        </div>
        <Link
          to={`/buyer/rfq/${rfq.id}`}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
        >
          <Eye size={16} />
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RFQCard;