import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Public/Home/Home';
import Register from '../pages/Guest/Register/Register'
import ClientRegister from '../pages/Guest/Register/Client/ClientRegister';
import ContributorRegister from '../pages/Guest/Register/Contributor/ContributorRegister';
import Login from '../pages/Guest/Login/Login';
import ForgotPassword from '../pages/Guest/Login/ForgotPassword/ForgotPassword'
import ResetPassword from '../pages/Guest/Login/ResetPassword/ResetPassword'
import ErrorPage from '../pages/Public/Errors/Error';

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
      <Route path="/error/400" element={<ErrorPage status={400} />} />
      <Route path="/error/401" element={<ErrorPage status={401} />} />
      <Route path="/error/403" element={<ErrorPage status={403} />} />
      <Route path="/error/404" element={<ErrorPage status={404} />} />
      <Route path="*" element={<ErrorPage status={404} />} />
    </Routes>
  );
}

export default AppRoutes;
