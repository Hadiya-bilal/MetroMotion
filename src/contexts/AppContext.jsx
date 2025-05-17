import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ 
    name: 'John Doe',
    email: 'john@example.com',
    isAdmin: false,
    transportCard: {
      number: '1234 5678 9101 1121',
      balance: 50
    },
    favoriteRoutes: [
      { id: 114, number: '114', name: 'Kluge - Adavere', from: 'Kluge', to: 'Adavere', type: 'bus' },
      { id: 124, number: '124', name: 'Kesk - Grad', from: 'Kesk', to: 'Grad', type: 'bus' }
    ]
  });

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};