import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Public/Home/Home';
import Register from '../pages/Guest/Register/Register'
import ClientRegister from '../pages/Guest/Register/Client/ClientRegister';
import ContributorRegister from '../pages/Guest/Register/Contributor/ContributorRegister';
import Login from '../pages/Guest/Login/Login';
import ForgotPassword from '../pages/Guest/Login/ForgotPassword/ForgotPassword'
import ResetPassword from '../pages/Guest/Login/ResetPassword/ResetPassword'

interface AppRoutesProps {
  className?: string;
}

const AppRoutes: React.FC<AppRoutesProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/client" element={<ClientRegister />} />
      <Route path="/register/contributor" element={<ContributorRegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default AppRoutes;
