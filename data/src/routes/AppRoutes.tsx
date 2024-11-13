import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register'
import ClientRegister from '../pages/Register/Client/ClientRegister';
import ContributorRegister from '../pages/Register/Contributor/ContributorRegister';

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
    </Routes>
  );
}

export default AppRoutes;
