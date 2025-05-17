import Header from '../../components/Header';
import StopItem from '../../components/StopItem';

export default function BookRide() {
  const stops = [
    { name: "Stop 1", address: "xyz street, xyz road, Tallin, Estonia", time: "04:35 PM" },
    // Add other stops...
  ];

  return (
    <div className="book-ride-screen">
      <Header title="Book Ride" />
      
      <div className="route-section">
        <h2>Kuise</h2>
        <div className="bus-options">
          {['A18', 'A14', 'A15', 'A16'].map(bus => (
            <div key={bus} className="bus-option">{bus}</div>
          ))}
        </div>
      </div>

      <div className="travel-info">
        <h2>Adavere Agro AS</h2>
        <div className="info-grid">
          <span>Leaving in mins</span>
          <span>30 mins</span>
          <span>Bus Number</span>
          <span>439 m</span>
          <span>Walk</span>
          <span>10 mins</span>
        </div>
      </div>

      <div className="cleaning-info">
        <h3>Last Cleaned Time 12:00 AM</h3>
      </div>

      <div className="stops-list">
        {stops.map((stop, index) => (
          <StopItem key={index} {...stop} />
        ))}
      </div>

      <button className="primary-button">Buy Ticket</button>
    </div>
  );
}