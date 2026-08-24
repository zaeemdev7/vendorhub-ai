import React, { useState } from 'react';
import QuoteComparison from '../../components/buyer/quote-comparison/QuoteComparison';

const CompareQuotes = () => {
  // Mock data - replace with API call
  const vendors = [
    {
      id: 1,
      name: 'Premium Textiles Ltd.',
      location: 'Karachi, Pakistan',
      rating: 4.8,
      verified: true,
      price: 2.50,
      moq: 1000,
      delivery: 15,
      certifications: ['ISO 9001', 'OEKO-TEX'],
      warranty: '1 year',
      score: 92,
      matchScore: 95,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 2,
      name: 'Global Manufacturing Co.',
      location: 'Lahore, Pakistan',
      rating: 4.5,
      verified: true,
      price: 2.30,
      moq: 5000,
      delivery: 20,
      certifications: ['ISO 9001', 'CE', 'GOTS'],
      warranty: '2 years',
      score: 87,
      matchScore: 88,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 3,
      name: 'FastEx Imports',
      location: 'Dubai, UAE',
      rating: 4.2,
      verified: false,
      price: 2.80,
      moq: 500,
      delivery: 10,
      certifications: ['ISO 9001'],
      warranty: '6 months',
      score: 78,
      matchScore: 75,
      image: 'https://via.placeholder.com/100'
    }
  ];

  const [selectedVendor, setSelectedVendor] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Compare Quotes</h1>
          <p className="text-gray-600 mt-1">Compare vendor offers side by side</p>
        </div>

        <QuoteComparison 
          vendors={vendors} 
          onSelectVendor={setSelectedVendor}
        />
      </div>
    </div>
  );
};

export default CompareQuotes;