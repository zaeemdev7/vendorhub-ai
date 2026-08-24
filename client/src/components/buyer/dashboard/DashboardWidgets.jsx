import React from 'react';
import { 
  FileText, 
  Clock, 
  ShoppingBag, 
  Star,
  TrendingUp 
} from 'lucide-react';

const DashboardWidgets = () => {
  const widgets = [
    {
      title: 'Active RFQs',
      value: '12',
      icon: FileText,
      color: 'text-[#2563EB]',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Pending Quotes',
      value: '8',
      icon: Clock,
      color: 'text-[#14B8A6]',
      bgColor: 'bg-teal-50'
    },
    {
      title: 'Active Orders',
      value: '5',
      icon: ShoppingBag,
      color: 'text-[#1E40AF]',
      bgColor: 'bg-indigo-50'
    },
    {
      title: 'Saved Vendors',
      value: '24',
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  return (
    <>
      {widgets.map((widget, index) => (
        <div 
          key={index}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">{widget.title}</p>
              <p className="text-2xl font-bold text-[#1F2937] mt-2">{widget.value}</p>
            </div>
            <div className={`${widget.bgColor} p-3 rounded-lg`}>
              <widget.icon className={`h-6 w-6 ${widget.color}`} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>+12% from last month</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default DashboardWidgets;