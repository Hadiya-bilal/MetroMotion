export default function RouteCard({ route }) {
  return (
    <div className="route-card">
      <div className="route-number">{route.number}</div>
      <div className="route-info">
        <h4>{route.name}</h4>
        <p>From: {route.from}</p>
        <p>To: {route.to}</p>
        <p>Next departure: {route.nextDeparture}</p>
      </div>
    </div>
  );
}