// src/hooks/useRFQ.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useRFQ = () => {
  const [rfqs, setRFQs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all RFQs
  const fetchRFQs = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/buyer/rfqs');
      setRFQs(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Create new RFQ
  const createRFQ = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/buyer/rfq', formData);
      setRFQs(prev => [response.data, ...prev]);
      setError(null);
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Get single RFQ
  const getRFQ = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/buyer/rfq/${id}`);
      setError(null);
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRFQs();
  }, []);

  return { rfqs, loading, error, createRFQ, getRFQ, fetchRFQs };
};