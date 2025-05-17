import { createContext, useState } from 'react';

// Create the context
const AppContext = createContext();

// Create the provider component
const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Passenger',
    isLoggedIn: true,
    transportCard: {
      number: '1234 5678 9012 3456',
      balance: 50.00
    }
  });

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};


export {
  AppContext as default, 
  AppProvider
};