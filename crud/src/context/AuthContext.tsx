import { FC, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginDTO } from '../model/LoginDTO';
import Api from '../services/Api';

export const AuthContext = createContext({});

const AuthProvider: FC<any> = ({ children }) => {
  const [token, setToken] = useState<string | null>('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async (user: LoginDTO) => {
    try {
      const { data } = await Api.post('/auth', user);
      localStorage.setItem('token', data);
      setToken(data);
      Api.defaults.headers.common['Authorization'] = data;
      setLoading(false);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  };

  const haveToken = () => {
    return localStorage.getItem('token');
  };

  // useEffect(() => {
  //   if (!token) {
  //     setLoading(false);
  //     navigate('/login');
  //   } else {
  //     Api.defaults.headers.common['Authorization'] = token;
  //   }
  //   // eslint-disable-next-line
  // }, []);

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <AuthContext.Provider
      value={{ haveToken, handleLogin, handleLogout, loading, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
