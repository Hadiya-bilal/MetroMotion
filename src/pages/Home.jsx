import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';
import RouteCard from '../components/RouteCard.jsx';
import useTransportData from '../hooks/useTransportData.jsx';
import Loader from '../components/Loader.jsx';

const Home = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [time, setTime] = useState('02:00 PM');
  const { routes, loading, error } = useTransportData();
  
  const mapContainerStyle = {
    width: '100%',
    height: '300px'
  };

  const center = {
    lat: 58.6546,
    lng: 25.9772
  };

  return (
    <div className="page-container">
      <h1>Where to go?</h1>
      
      <div className="search-container">
        <div className="input-group">
          <label>From</label>
          <Autocomplete>
            <input 
              type="text" 
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Enter starting point"
            />
          </Autocomplete>
        </div>
        
        <div className="input-group">
          <label>To</label>
          <Autocomplete>
            <input 
              type="text" 
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Enter destination"
            />
          </Autocomplete>
        </div>
        
        <div className="input-group">
          <label>Time</label>
          <input 
            type="time" 
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        
        <button className="search-btn">Search Ride</button>
      </div>
      
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
        >
          {/* Map markers would go here */}
        </GoogleMap>
      </LoadScript>
      
      <div className="routes-section">
        <h2>Popular Routes</h2>
        {loading && <Loader />}
        {error && <p className="error">{error}</p>}
        <div className="routes-grid">
          {routes.slice(0, 4).map(route => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;