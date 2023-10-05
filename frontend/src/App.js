import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ForgotPassword from './Pages/ForgotPassword';
import ProductDetails from './Pages/ProductDetails';
import { LoadUser } from './Redux/Actions/userActions';
import { useEffect, useState } from 'react';
import Profile from './Pages/Profile';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import UpdateProfile from './Pages/UpdateProfile';
import ResetPassword from './Pages/ResetPassword';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Shop from './Pages/Shop';
import ConfirmOrder from './Pages/ConfirmOrder';
import Payment from './Pages/Payment';
import { baseUrl } from './UrlHelper/baseUrl';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentSuccess from './Pages/PaymentSuccess';
import MyOrder from './Pages/MyOrder';
import OrderDetails from './Pages/OrderDetails';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import ViewProducts from './Pages/Admin/ViewProducts';
import AdminAllUsers from './Pages/Admin/AdminAllUsers';
import AdminAllOrders from './Pages/Admin/AdminAllOrders';
import AdminCreateProduct from './Pages/Admin/AdminCreateProduct';
import UpdateAdminProduct from './Pages/Admin/UpdateAdminProduct';
import UpdateAdminUser from './Pages/Admin/UpdateAdminUser';
import UpdateAdminOrder from './Pages/Admin/UpdateAdminOrder';
import AdminAllReviews from './Pages/Admin/AdminAllReviews';
axios.defaults.withCredentials = true;


function App() {
  const dispatch = useDispatch()
  const [stripeApiKey, setStripeApiKey] = useState("")

  async function fetchStripeApiKey() {
    const { data } = await axios.get(`${baseUrl}/payment/stripeapikey`)
    setStripeApiKey(data.stripeApiKey)
  }
  useEffect(() => {
    fetchStripeApiKey();
  })

  useEffect(() => {
    dispatch(LoadUser())
  }, [dispatch])

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Main Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Auth Routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />

        {/* Cart Routes */}
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart/shipping' element={<Checkout />} />
        <Route path='/cart/order-confirm' element={<ConfirmOrder />} />
        <Route path='/success' element={<PaymentSuccess />} />

        {/* Order Route */}
        <Route path='/all-orders' element={<MyOrder />} />
        <Route path='/all-orders/order/:id' element={<OrderDetails />} />

        {/* Profile Routes */}
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/update' element={<UpdateProfile />} />
        <Route path='/profile/update-password' element={<ResetPassword />} />

        {/* Admin Routes */}
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/all-products' element={<ViewProducts />} />
        <Route path='/admin/all-users' element={<AdminAllUsers />} />
        <Route path='/admin/all-orders' element={<AdminAllOrders />} />
        <Route path='/admin/all-reviews' element={<AdminAllReviews />} />
        <Route path='/admin/all-products/create' element={<AdminCreateProduct />} />
        <Route path='/admin/all-products/product/:id' element={<UpdateAdminProduct />} />
        <Route path='/admin/all-users/user/:id' element={<UpdateAdminUser />} />
        <Route path='/admin/all-orders/order/:id' element={<UpdateAdminOrder />} />

        {stripeApiKey && (
          <Route path="/cart/order-confirm/payment" element={<Elements stripe={loadStripe(stripeApiKey)}><Payment /></Elements>} />
        )}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;