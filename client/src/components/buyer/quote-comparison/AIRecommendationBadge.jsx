import React from 'react';
import { Sparkles } from 'lucide-react';

const AIRecommendationBadge = ({ score }) => {
  const getLabel = () => {
    if (score >= 95) return 'Best Match';
    if (score >= 90) return 'Strong Match';
    if (score >= 80) return 'Good Match';
    return 'Recommended';
  };

  return (
    <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md animate-pulse">
      <Sparkles size={12} />
      <span>AI {getLabel()}</span>
    </div>
  );
};

export default AIRecommendationBadge;