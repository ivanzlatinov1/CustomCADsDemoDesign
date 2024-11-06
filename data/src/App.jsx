import React from 'react';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Gradient from './components/Home/Background/GradientMesh/Gradient';
import AppRoutes from './routes/AppRoutes';
import "./index.css"

function App() {

  return (
    <div className=".wrapper">
      <Header />
      <Gradient />
      <AppRoutes className="content" />
      <Footer />
    </div>
  )
}

export default App
