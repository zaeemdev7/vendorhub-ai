// src/hooks/useQuoteComparison.js
import { useState } from 'react';
import axios from 'axios';

export const useQuoteComparison = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch quotes for comparison
  const fetchQuotes = async (rfqId) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/buyer/quotes/${rfqId}`);
      setVendors(response.data);
      setError(null);
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Select vendor
  const selectVendor = async (vendorId, rfqId) => {
    setLoading(true);
    try {
      const response = await axios.post(`/api/buyer/select-vendor`, { vendorId, rfqId });
      setError(null);
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { vendors, loading, error, fetchQuotes, selectVendor };
};