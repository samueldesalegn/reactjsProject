import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router';
import router, { Auth } from './router';
import UserContext from './userContext';

function App() {
  const [state, setState] = useState({ products: [], user: null });

  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      setState({ ...state, user: token });
    }
  }, []);

  return (
    <div >
      <UserContext.Provider value={{ state, setState }}>
        {state.user ? <RouterProvider router={router} /> : <Auth />}
      </UserContext.Provider>
    </div>
  );
}

export default App;

