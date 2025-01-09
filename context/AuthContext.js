import { createContext, useState, useEffect } from 'react';
import api from '../utils/axios';
import jwt_decode from 'jwt-decode'; // Corrected import

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Check if token exists in localStorage on initial load
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      setUser(jwt_decode(storedToken));  // Use jwt_decode here
    }
  }, []);

  // Login method
  const login = async (credentials) => {
    try {
      const response = await api.post('/login', credentials);
      const { token } = response.data;
      localStorage.setItem('token', token);
      setToken(token);
      setUser(jwt_decode(token));  // Use jwt_decode here
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  // Register method
  const register = async (data) => {
    try {
      await api.post('/register', data);
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  // Logout method
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
