export default function Header({ title, time = "9:41" }) {
  return (
    <header style={{
      padding: '1rem',
      textAlign: 'center',
      borderBottom: '1px solid #e5e7eb'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: '500' }}>{time}</div>
      <h1 style={{ margin: '0.5rem 0', fontSize: '1.2rem' }}>{title}</h1>
    </header>
  );
}