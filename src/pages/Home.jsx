export default function Home() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#2563eb',
        marginBottom: '2rem',
        fontWeight: '700'
      }}>
        Welcome to MetroMotion
      </h1>
      
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        <a 
          href="/login" 
          style={{
            padding: '0.75rem 1.5rem',
            background: '#2563eb',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'background 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = '#1d4ed8'}
          onMouseOut={(e) => e.currentTarget.style.background = '#2563eb'}
        >
          Login
        </a>
        
        <a 
          href="/signup" 
          style={{
            padding: '0.75rem 1.5rem',
            border: '1px solid #2563eb',
            color: '#2563eb',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'all 0.2s',
            background: 'white'
          }}
          onMouseOver={(e) => {
            e.currentTarget.background = '#f0f4ff';
            e.currentTarget.style.background = '#f0f4ff';
          }}
          onMouseOut={(e) => {
            e.currentTarget.background = 'white';
            e.currentTarget.style.background = 'white';
          }}
        >
          Sign Up
        </a>
      </nav>
    </div>
  );
}