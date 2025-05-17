   import Header from "../../components/Header/Header";
   import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-screen">
      <Header title="Home" />
      
      <div className="location-cards">
        <div className="location-card">
          <h3>Kluge</h3>
          <p>Ala</p>
          <p>Ala</p>
        </div>
        
        <div className="highlighted-card">
          <h3>Adavere Agro AS</h3>
          <p>Adavere m</p>
          <p>Kesk</p>
          <p>Grad</p>
          <p>Adavere</p>
        </div>
      </div>

      <div className="search-box">
        <h3>Where to go?</h3>
        <div className="search-inputs">
          <input type="text" placeholder="From" />
          <input type="text" placeholder="To" />
          <input type="text" value="02:00 PM" readOnly />
        </div>
        <button 
          className="primary-button"
          onClick={() => navigate('/search-ride')}
        >
          Search Ride
        </button>
      </div>
    </div>
  );
}