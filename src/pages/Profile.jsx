import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';
import '../assets/styles.css';

const Profile = () => {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <div className="profile-info">
          <div className="profile-avatar">
            {user?.name.charAt(0).toUpperCase()}
          </div>
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
          <div className="card-balance">
            <span>Card Balance:</span>
            <span className="balance-amount">€{user?.transportCard?.balance.toFixed(2)}</span>
          </div>
        </div>
        
        <nav className="profile-nav">
          <Link to="favorites" className="profile-nav-link">
            <i className="icon-heart"></i> Favorite Routes
          </Link>
          <Link to="payments" className="profile-nav-link">
            <i className="icon-credit-card"></i> Payments
          </Link>
          <Link to="settings" className="profile-nav-link">
            <i className="icon-settings"></i> Settings
          </Link>
          <button onClick={handleLogout} className="logout-btn">
            <i className="icon-logout"></i> Logout
          </button>
        </nav>
      </div>
      
      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;