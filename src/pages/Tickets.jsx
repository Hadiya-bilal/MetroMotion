import TransportCard from '../components/TransportCard.jsx';

const Tickets = () => {
  return (
    <div className="tickets-container">
      <h1>E-Tickets</h1>
      
      <div className="ticket-options">
        <div className="ticket-option">
          <h3>QR Ticket</h3>
          <button>Generate QR Code</button>
        </div>
        
        <TransportCard />
        
        <div className="ticket-option">
          <h3>Other Options</h3>
          <button>Top Up Card</button>
          <button>Monthly Pass</button>
          <button>Pay via Apple Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default Tickets;