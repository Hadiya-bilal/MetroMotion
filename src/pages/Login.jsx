import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import '../App.css';


export default function Login() {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLogin = () => {
    window.location.href = 'https://your-backend-api.com/auth/google';
  };

  const handleFacebookLogin = () => {
    window.location.href = 'https://your-backend-api.com/auth/facebook';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ email });
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="/MMlogo.svg" alt="MetroMotion Logo" className="logo" />

      </div>
      
      <h2>MetroMotion Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="login-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input
          type="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <div className="login-options">
          <a href="#" className="forgot-password">Forgot your password?</a>
        </div>
        
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      
      <div className="signup-prompt">
        Or Sign Up Using
        <div className="social-buttons">
          <button 
            className="social-button google"
            onClick={handleGoogleLogin}
          >
            G
          </button>
          <button 
            className="social-button facebook"
            onClick={handleFacebookLogin}
          >
            F
          </button>
        </div>
      </div>
    </div>
  );
}