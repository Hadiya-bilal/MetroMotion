import { useContext } from 'react';
import AppContext from '../context/AppContext.jsx'; // Now using default import

const TransportCard = () => {
  const { user } = useContext(AppContext);
  
  return (
    <div className="transport-card">
      <h3>Transport Card</h3>
      <div className="card-details">
        <p>Card Number: {user.transportCard.number}</p>
        <p>Balance: €{user.transportCard.balance.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default TransportCard;