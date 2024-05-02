// App.js
import React, { useState } from 'react';
import Login from './Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = (username, password) => {
    // Check if username and password are correct (dummy credentials)
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Logout onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;
