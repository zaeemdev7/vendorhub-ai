// src/routes/buyerRoutes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import buyer pages
import BuyerDashboard from '../pages/buyer/Dashboard';
import NewRFQ from '../pages/buyer/NewRFQ';
import RFQs from '../pages/buyer/RFQs';
import Quotes from '../pages/buyer/Quotes';
import CompareQuotes from '../pages/buyer/CompareQuotes';
import RFQDetails from '../pages/buyer/RFQDetails';

const BuyerRoutes = () => {
  return (
    <Routes>
      {/* Dashboard - default route */}
      <Route index element={<BuyerDashboard />} />
      
      {/* All buyer routes with relative paths */}
      <Route path="dashboard" element={<BuyerDashboard />} />
      <Route path="new-rfq" element={<NewRFQ />} />
      <Route path="rfqs" element={<RFQs />} />
            <Route path="rfq/:id" element={<RFQDetails />} />
      <Route path="quotes" element={<Quotes />} />
      <Route path="compare-quotes" element={<CompareQuotes />} />
      
      {/* Catch any unmatched /buyer/* routes */}
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
};

export default BuyerRoutes;