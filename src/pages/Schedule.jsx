import { useState, useEffect } from 'react';
import useTransportData from '../hooks/useTransportData.jsx';
import useDebounce from '../hooks/useDebounce.jsx';
import RouteCard from '../components/RouteCard.jsx';
import Loader from '../components/Loader.jsx';

const Schedule = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { routes, loading, error } = useTransportData();

  const filteredRoutes = routes.filter(route => {
    const matchesSearch = route.number.includes(debouncedSearchTerm) || 
                         route.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'buses' && route.type === 'bus') ||
                      (activeTab === 'trams' && route.type === 'tram');
    return matchesSearch && matchesTab;
  });

  return (
    <div className="schedule-container">
      <div className="schedule-header">
        <h1>Schedule</h1>
        <div className="tabs">
          <button 
            className={activeTab === 'all' ? 'active' : ''}
            onClick={() => setActiveTab('all')}
          >
            All Rides
          </button>
          <button 
            className={activeTab === 'buses' ? 'active' : ''}
            onClick={() => setActiveTab('buses')}
          >
            Buses
          </button>
          <button 
            className={activeTab === 'trams' ? 'active' : ''}
            onClick={() => setActiveTab('trams')}
          >
            Trams
          </button>
        </div>
        <input
          type="text"
          placeholder="Search routes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <Loader />}
      {error && <p className="error">{error}</p>}

      <div className="routes-grid">
        {filteredRoutes.map(route => (
          <RouteCard key={route.id} route={route} />
        ))}
      </div>
    </div>
  );
};

export default Schedule;