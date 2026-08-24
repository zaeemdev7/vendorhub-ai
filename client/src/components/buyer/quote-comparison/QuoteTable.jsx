// src/components/buyer/quote-comparison/QuoteTable.jsx
import React from 'react';
import { Check, X, TrendingUp } from 'lucide-react';

const QuoteTable = ({ vendors, onSelect, sortBy, onSort }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Feature
            </th>
            {vendors.map((vendor) => (
              <th key={vendor.id} className="px-6 py-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="font-medium text-gray-800">{vendor.name}</span>
                  <span className="text-xs text-gray-500">{vendor.location}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {/* Price Row */}
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-gray-700">Price (per unit)</td>
            {vendors.map((vendor) => (
              <td key={vendor.id} className="px-6 py-4 text-center font-semibold">
                ${vendor.price.toFixed(2)}
              </td>
            ))}
          </tr>

          {/* MOQ Row */}
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-gray-700">MOQ</td>
            {vendors.map((vendor) => (
              <td key={vendor.id} className="px-6 py-4 text-center">
                {vendor.moq.toLocaleString()}
              </td>
            ))}
          </tr>

          {/* Delivery Row */}
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-gray-700">Delivery (days)</td>
            {vendors.map((vendor) => (
              <td key={vendor.id} className="px-6 py-4 text-center">
                <span className={vendor.delivery <= 15 ? 'text-green-600 font-medium' : 'text-yellow-600'}>
                  {vendor.delivery}
                </span>
              </td>
            ))}
          </tr>

          {/* Certifications Row */}
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-gray-700">Certifications</td>
            {vendors.map((vendor) => (
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

          {/* AI Score Row */}
          <tr className="bg-blue-50/30">
            <td className="px-6 py-4 text-sm font-medium text-gray-700 flex items-center gap-2">
              <TrendingUp size={18} className="text-blue-600" />
              AI Match Score
            </td>
            {vendors.map((vendor) => (
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
            {vendors.map((vendor) => (
              <td key={vendor.id} className="px-6 py-4 text-center">
                <button
                  onClick={() => onSelect(vendor)}
                  className={`
                    w-full px-4 py-2 rounded-lg font-medium transition-all
                    ${vendor.matchScore >= 90 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}
                  `}
                >
                  {vendor.matchScore >= 90 ? 'Select' : 'View'}
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuoteTable;