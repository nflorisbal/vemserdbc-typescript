import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import Aside from './components/aside/Aside';
import Address from './pages/address/Address';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import NotFound from './pages/notfound/NotFound';
import Users from './pages/users/Users';
import UserProvider from './context/UserContext';
import AddressProvider from './context/AddressContext';

const Routers = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <AddressProvider>
          <Aside />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />} />
            <Route path="/address" element={<Address />} />
          </Routes>
          </AddressProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routers;
