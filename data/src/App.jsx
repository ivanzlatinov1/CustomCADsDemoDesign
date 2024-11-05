import React from 'react';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import Bubbles from './components/Home/Background/Bubbles';
import "./index.css"

function App() {

  return (
    <div className=".wrapper">
      <Header />
      <Bubbles />
      <AppRoutes className="content" />
      <Footer />
    </div>
  )
}

export default App
