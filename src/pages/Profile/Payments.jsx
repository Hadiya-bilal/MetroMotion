import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';
const Payments = () => {
  const { user, setUser } = useContext(AppContext);
  const [amount, setAmount] = useState(10);

  const handleTopUp = () => {
    setUser(prev => ({
      ...prev,
      transportCard: {
        ...prev.transportCard,
        balance: prev.transportCard.balance + amount
      }
    }));
  };

  return (
    <div className="payments-container">
      <h2>Payment Methods</h2>
      <div className="payment-card">
        <h3>Top Up Transport Card</h3>
        <div className="amount-selector">
          <button onClick={() => setAmount(5)} className={amount === 5 ? 'active' : ''}>€5</button>
          <button onClick={() => setAmount(10)} className={amount === 10 ? 'active' : ''}>€10</button>
          <button onClick={() => setAmount(20)} className={amount === 20 ? 'active' : ''}>€20</button>
          <button onClick={() => setAmount(50)} className={amount === 50 ? 'active' : ''}>€50</button>
        </div>
        <button className="top-up-btn" onClick={handleTopUp}>
          Top Up €{amount}
        </button>
      </div>
    </div>
  );
};

export default Payments;