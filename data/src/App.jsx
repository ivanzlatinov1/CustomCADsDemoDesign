import React from 'react';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
