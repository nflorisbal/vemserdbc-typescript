import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import Header from './components/header/Header';
import Address from './pages/address/Address';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import NotFound from './pages/notfound/NotFound';
import Users from './pages/users/Users';
import { DivFrame } from './components/frame/Frame.styles';

const Routers = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DivFrame>
          <Header />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />} />
            <Route path="/address" element={<Address />} />
          </Routes>
        </DivFrame>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routers;
