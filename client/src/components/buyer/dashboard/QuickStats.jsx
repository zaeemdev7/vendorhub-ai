import React from 'react';
import { 
  FileText, 
  Clock, 
  Package, 
  Star,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const QuickStats = ({ stats }) => {
  const statItems = [
    { 
      label: 'Active RFQs', 
      value: stats.activeRFQs, 
      icon: FileText, 
      color: 'blue',
      change: '+2 this week'
    },
    { 
      label: 'Pending Quotes', 
      value: stats.pendingQuotes, 
      icon: Clock, 
      color: 'yellow',
      change: '3 awaiting response'
    },
    { 
      label: 'Orders', 
      value: stats.orders, 
      icon: Package, 
      color: 'green',
      change: '2 in transit'
    },
    { 
      label: 'Saved Vendors', 
      value: stats.savedVendors, 
      icon: Star, 
      color: 'purple',
      change: '4 new this month'
    }
  ];

  const colorMap = {
    blue: 'bg-blue-50 text-blue-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600'
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-lg ${colorMap[item.color]}`}>
                <Icon size={24} />
              </div>
              <span className="text-xs font-medium text-gray-400">{item.change}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-3">{item.value}</h3>
            <p className="text-sm text-gray-600">{item.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default QuickStats;