import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useTransportData = () => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRoutes = useCallback(async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_TRANSPORT_API_BASE_URL}/routes`
      );
      setRoutes(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRoutes();
  }, [fetchRoutes]);

  return { routes, loading, error, fetchRoutes };
};

export default useTransportData;