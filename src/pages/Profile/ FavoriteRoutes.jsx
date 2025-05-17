import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';
import RouteCard from '../components/RouteCard.jsx';

const FavoriteRoutes = () => {
  const { user } = useContext(AppContext);
  
  return (
    <div className="favorites-container">
      <h2>Favorite Routes</h2>
      <div className="routes-grid">
        {user.favoriteRoutes?.length > 0 ? (
          user.favoriteRoutes.map(route => (
            <RouteCard key={route.id} route={route} />
          ))
        ) : (
          <p>No favorite routes saved yet.</p>
        )}
      </div>
    </div>
  );
};

export default FavoriteRoutes;