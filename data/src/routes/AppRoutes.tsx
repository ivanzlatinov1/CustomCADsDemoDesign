import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Public/Home/Home';
import Register from '../pages/Guest/Register/Register'
import ClientRegister from '../pages/Guest/Register/Client/ClientRegister';
import ContributorRegister from '../pages/Guest/Register/Contributor/ContributorRegister';
import Login from '../pages/Guest/Login/Login';
import ForgotPassword from '../pages/Guest/Login/ForgotPassword/ForgotPassword'
import ResetPassword from '../pages/Guest/Login/ResetPassword/ResetPassword'
import Gallery from '../pages/Public/Gallery/Gallery';
import Roles from '../pages/Public/Roles/Roles';
import ClientRole from '../pages/Public/Roles/Client/ClientRole';
import ContributorRole from '../pages/Public/Roles/Contributor/ContributorRole';
import DesignerRole from '../pages/Public/Roles/Designer/DesignerRole';
import ErrorPage from '../pages/Public/Errors/Error';
import ProductInfo from '../pages/Public/Product/ProductInfo';
import AboutUs from '../pages/Public/AboutUs/AboutUs';
import Account from '../pages/Public/Account/Account';
import CustomModels from '../pages/Client/CustomModels/CustomModels';
import OrderCustomModel from '../pages/Client/OrderCustomModel/OrderCustomModel';
import MainCart from '../pages/Client/Cart/MainCart';
import ClientDashboard from '../pages/Client/Dashboard/Dashboard';
import Carts from '../pages/Client/Carts/Carts';
import ProductDetails from '../pages/Client/ProductDetails/ProductDetails';
import OrderDetails from '../pages/Client/OrderDetails/OrderDetails';
import ViewCAD from '../pages/Client/ViewCAD/ViewCAD';
import Shipments from '../pages/Client/Shipments/Shipments';
import ShipmentDetails from '../pages/Client/Shipments/ShipmentDetails/ShipmentDetails';
import ViewerPage from '../pages/Public/Editor/ViewerPage/ViewerPage';
import DimensionsPage from '../pages/Public/Editor/DimensionsPage/DimensionsPage';
import ProcessorPage from '../pages/Public/Editor/ProcessorPage/ProcessorPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/client" element={<ClientRegister />} />
      <Route path="/register/contributor" element={<ContributorRegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/product" element={<ProductInfo />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="/roles/client" element={<ClientRole />} />
      <Route path="/roles/contributor" element={<ContributorRole />} />
      <Route path="/roles/designer" element={<DesignerRole />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/account" element={<Account />} />
      <Route path="/custom-models" element={<CustomModels />} />
      <Route path="/order-custom" element={<OrderCustomModel />} />
      <Route path="/cart" element={<MainCart />} />
      <Route path="/carts" element={<Carts />} />
      <Route path="/details" element={<ProductDetails />} />
      <Route path="/client-dashboard" element={<ClientDashboard />} />
      <Route path="/order-details" element={<OrderDetails />} />
      <Route path="/view-cad" element={<ViewCAD />} />
      <Route path="/shipments" element={<Shipments />} />
      <Route path="/shipment-details" element={<ShipmentDetails />} />
      <Route path="/viewer" element={<ViewerPage />} />
      <Route path="/adjust-dimensions" element={<DimensionsPage />} />
      <Route path="/processor" element={<ProcessorPage />} />
      <Route path="/error/400" element={<ErrorPage status={400} />} />
      <Route path="/error/401" element={<ErrorPage status={401} />} />
      <Route path="/error/403" element={<ErrorPage status={403} />} />
      <Route path="/error/404" element={<ErrorPage status={404} />} />
      <Route path="*" element={<ErrorPage status={404} />} />
    </Routes>
  );
}

export default AppRoutes;
