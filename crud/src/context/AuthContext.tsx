import { FC, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginDTO } from '../model/LoginDTO';
import Api from '../services/Api';

export const AuthContext = createContext({});

const AuthProvider: FC<any> = ({ children }) => {
  const [token, setToken] = useState('');
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (user: LoginDTO) => {
    try {
      const { data } = await Api.post('/auth', user);
      localStorage.setItem('token', data);
      setLogged(true);
      setToken(data);
      Api.defaults.headers.common['Authorization'] = data;
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLogged(false);
    navigate('/login');
  };

  const haveToken = () => {
    return localStorage.getItem('token');
  };

  return (
    <AuthContext.Provider
      value={{ token, haveToken, logged, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
