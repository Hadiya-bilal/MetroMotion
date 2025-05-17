import { useNavigate } from 'react-router-dom';
import '../assets/styles.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <button onClick={() => navigate('/')} className="home-btn">
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;