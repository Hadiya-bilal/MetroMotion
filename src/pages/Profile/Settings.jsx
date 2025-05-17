import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';

import ErrorMessage from '../../components/ErrorMessage.jsx';

const Settings = () => {
  const { user, setUser } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (formData.newPassword !== formData.confirmPassword) {
      setError("New passwords don't match");
      return;
    }

    
    setUser(prev => ({ ...prev, name: formData.name, email: formData.email }));
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="settings-container">
      <h2>Account Settings</h2>
      
      {error && <ErrorMessage message={error} />}
      {success && <div className="success-message">Settings updated successfully!</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Current Password</label>
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            placeholder="Enter current password to make changes"
          />
        </div>

        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="save-btn">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;