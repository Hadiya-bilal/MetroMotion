import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';
import '../assets/styles.css';

const User = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="user-dashboard">
      <h1>My Account</h1>
      
      <div className="user-stats">
        <div className="stat-card">
          <h3>Travel Points</h3>
          <p>{user?.points || 0}</p>
        </div>
        
        <div className="stat-card">
          <h3>Favorite Routes</h3>
          <p>{user?.favoriteRoutes?.length || 0}</p>
        </div>
        
        <div className="stat-card">
          <h3>Current Balance</h3>
          <p>€{user?.transportCard?.balance.toFixed(2)}</p>
        </div>
      </div>

      <div className="user-actions">
        <button className="action-btn">
          <i className="icon-ticket"></i> View Tickets
        </button>
        <button className="action-btn">
          <i className="icon-history"></i> Trip History
        </button>
        <button className="action-btn">
          <i className="icon-card"></i> Payment Methods
        </button>
      </div>
    </div>
  );
};

export default User;