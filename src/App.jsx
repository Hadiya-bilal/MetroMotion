import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';
import Home from './pages/Home.jsx';
import Schedule from './pages/Schedule.jsx';
import Tickets from './pages/Tickets.jsx';
import Profile from './pages/Profile.jsx';
import User from './pages/User.jsx';
import NotFound from './pages/NotFound.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <AppProvider>
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/profile" element={<Profile />}>
              <Route path="favorites" element={<FavoriteRoutes />} />
              <Route path="payments" element={<Payments />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="/account" element={user ? <User /> : <Navigate to="/login" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <NavBar />
      </div>
    </AppProvider>
  );
}

export default App;