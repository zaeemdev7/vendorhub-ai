import React from 'react';
import { 
  Star, 
  Shield, 
  DollarSign, 
  Clock, 
  Package, 
  Award,
  TrendingUp,
  MapPin,
  CheckCircle
} from 'lucide-react';

const VendorComparisonCard = ({ vendor, onSelect }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0" />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-gray-800">{vendor.name}</h3>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <MapPin size={14} />
                {vendor.location}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-yellow-500">
                <Star size={16} fill="currentColor" />
                {vendor.rating}
              </span>
              {vendor.verified && (
                <Shield size={16} className="text-green-500" />
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="flex items-center gap-2 text-sm">
              <DollarSign size={16} className="text-blue-600" />
              <span className="text-gray-700">${vendor.price.toFixed(2)}/unit</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Package size={16} className="text-blue-600" />
              <span className="text-gray-700">MOQ: {vendor.moq}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock size={16} className="text-blue-600" />
              <span className="text-gray-700">{vendor.delivery} days</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Award size={16} className="text-blue-600" />
              <span className="text-gray-700">{vendor.certifications.length} certs</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <TrendingUp size={18} className="text-blue-600" />
              <span className="font-medium text-gray-800">AI Match: {vendor.matchScore}%</span>
            </div>
            <button
              onClick={() => onSelect && onSelect(vendor)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all"
            >
              View Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorComparisonCard;