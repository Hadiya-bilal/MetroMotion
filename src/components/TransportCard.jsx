import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';

const TransportCard = () => {
  const { user } = useContext(AppContext);
  
  return (
    <div className="transport-card">
      <h3>Transport Card</h3>
      <div className="card-details">
        <p>Card Number: {user.transportCard.number}</p>
        <p>Balance: €{user.transportCard.balance.toFixed(2)}</p>
      </div>
      <div className="card-actions">
        <button>Top Up Card</button>
        <button>Monthly Pass</button>
      </div>
    </div>
  );
};

export default TransportCard;
