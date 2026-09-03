import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Check, 
  X, 
  Star, 
  Award,
  TrendingUp,
  Clock,
  Package,
  DollarSign,
  Shield,
  FileText
} from 'lucide-react';
import AIRecommendationBadge from './AIRecommendationBadge';
import VendorComparisonCard from './VendorComparisonCard';

const QuoteComparison = ({ vendors, onSelectVendor }) => {
  const [sortBy, setSortBy] = useState('matchScore');
  const [sortOrder, setSortOrder] = useState('desc');

  const sortVendors = (vendors) => {
    return [...vendors].sort((a, b) => {
      let aVal = a[sortBy];
      let bVal = b[sortBy];
      
      if (typeof aVal === 'string') {
        return sortOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
    });
  };

  const sortedVendors = sortVendors(vendors);

  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Sort by:</span>
          <div className="flex flex-wrap gap-2">
            {['matchScore', 'price', 'delivery', 'rating'].map((field) => (
              <button
                key={field}
                onClick={() => toggleSort(field)}
                className={`
                  px-3 py-1.5 rounded-lg text-sm font-medium transition-all
                  ${sortBy === field ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                `}
              >
                {field === 'matchScore' ? 'AI Match' : field.charAt(0).toUpperCase() + field.slice(1)}
                {sortBy === field && (
                  sortOrder === 'asc' ? <ChevronUp size={14} className="inline ml-1" /> : <ChevronDown size={14} className="inline ml-1" />
                )}
              </button>
            ))}
          </div>
        </div>
        <span className="text-sm text-gray-500">{vendors.length} vendors found</span>
      </div>

      {/* Comparison Table - Desktop */}
      <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Feature
                </th>
                {sortedVendors.map((vendor) => (
                  <th key={vendor.id} className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg mb-2" />
                      <span className="font-medium text-gray-800">{vendor.name}</span>
                      <span className="text-xs text-gray-500">{vendor.location}</span>
                      {vendor.verified && (
                        <span className="text-xs text-green-600 flex items-center gap-1 mt-1">
                          <Shield size={12} />
                          Verified
                        </span>
                      )}
                      {vendor.matchScore >= 90 && (
                        <AIRecommendationBadge score={vendor.matchScore} />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {/* Price Row */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-700 flex items-center gap-2">
                  <DollarSign size={18} className="text-blue-600" />
                  Price (per unit)
                </td>
                {sortedVendors.map((vendor) => (
                  <td key={vendor.id} className="px-6 py-4 text-center font-semibold">
                    ${vendor.price.toFixed(2)}
                  </td>
                ))}
              </tr>

              {/* MOQ Row */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Package size={18} className="text-blue-600" />
                  Minimum Order Quantity
                </td>
                {sortedVendors.map((vendor) => (
                  <td key={vendor.id} className="px-6 py-4 text-center">
                    {vendor.moq.toLocaleString()}
                  </td>
                ))}
              </tr>

              {/* Delivery Row */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Clock size={18} className="text-blue-600" />
                  Delivery (days)
                </td>
                {sortedVendors.map((vendor) => (
                  <td key={vendor.id} className="px-6 py-4 text-center">
                    <span className={vendor.delivery <= 15 ? 'text-green-600 font-medium' : 'text-yellow-600'}>
                      {vendor.delivery}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Certifications Row */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Award size={18} className="text-blue-600" />
                  Certifications
                </td>
                {sortedVendors.map((vendor) => (
                  <td key={vendor.id} className="px-6 py-4 text-center">
                    <div className="flex flex-wrap justify-center gap-1">
                      {vendor.certifications.map((cert) => (
                        <span key={cert} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Warranty Row */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Shield size={18} className="text-blue-600" />
                  Warranty
                </td>
                {sortedVendors.map((vendor) => (
                  <td key={vendor.id} className="px-6 py-4 text-center">
                    {vendor.warranty}
                  </td>
                ))}
              </tr>

              {/* AI Score Row */}
              <tr className="bg-blue-50/30">
                <td className="px-6 py-4 text-sm font-medium text-gray-700 flex items-center gap-2">
                  <TrendingUp size={18} className="text-blue-600" />
                  AI Match Score
                </td>
                {sortedVendors.map((vendor) => (
                  <td key={vendor.id} className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className={`
                        text-lg font-bold
                        ${vendor.matchScore >= 90 ? 'text-green-600' : ''}
                        ${vendor.matchScore >= 80 && vendor.matchScore < 90 ? 'text-blue-600' : ''}
                        ${vendor.matchScore < 80 ? 'text-yellow-600' : ''}
                      `}>
                        {vendor.matchScore}%
                      </span>
                      <div className="w-full max-w-[100px] h-1.5 bg-gray-200 rounded-full mt-1">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                          style={{ width: `${vendor.matchScore}%` }}
                        />
                      </div>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Action Row */}
              <tr>
                <td className="px-6 py-4"></td>
                {sortedVendors.map((vendor) => (
                  <td key={vendor.id} className="px-6 py-4 text-center">
                    <button
                      onClick={() => onSelectVendor(vendor)}
                      className={`
                        w-full px-4 py-2 rounded-lg font-medium transition-all
                        ${vendor.matchScore >= 90 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}
                      `}
                    >
                      {vendor.matchScore >= 90 ? 'Select Vendor' : 'View Details'}
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards View */}
      <div className="lg:hidden space-y-4">
        {sortedVendors.map((vendor) => (
          <VendorComparisonCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </div>
  );
};

export default QuoteComparison;