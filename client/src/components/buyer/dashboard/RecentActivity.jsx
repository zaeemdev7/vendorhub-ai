import React from 'react';
import { Clock, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';

const RecentActivity = ({ activities }) => {
  const getIcon = (type) => {
    switch(type) {
      case 'rfq': return Clock;
      case 'quote': return CheckCircle;
      case 'message': return MessageCircle;
      default: return AlertCircle;
    }
  };

  const getColor = (type) => {
    switch(type) {
      case 'rfq': return 'blue';
      case 'quote': return 'green';
      case 'message': return 'teal';
      default: return 'yellow';
    }
  };

  const colorMap = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    teal: 'bg-teal-100 text-teal-600',
    yellow: 'bg-yellow-100 text-yellow-600'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, idx) => {
          const Icon = getIcon(activity.type);
          return (
            <div key={idx} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className={`p-2 rounded-lg ${colorMap[getColor(activity.type)]}`}>
                <Icon size={18} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">{activity.description}</p>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;