import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const SpendingChart = ({ data }) => {
  // Simple bar chart visualization
  const maxValue = Math.max(...data.map(d => d.amount));
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Spending Trends</h3>
        <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
          <TrendingUp size={16} />
          <span>+12% this month</span>
        </div>
      </div>
      
      <div className="flex items-end justify-between h-48 gap-2">
        {data.map((item, idx) => {
          const height = (item.amount / maxValue) * 100;
          return (
            <div key={idx} className="flex flex-col items-center flex-1">
              <div 
                className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-all cursor-pointer"
                style={{ height: `${height}%`, minHeight: '4px' }}
              >
                <div className="opacity-0 hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded py-1 px-2 -mt-8">
                  ${item.amount}
                </div>
              </div>
              <span className="text-xs text-gray-600 mt-2">{item.month}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpendingChart;