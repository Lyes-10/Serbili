import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import VerifyCode from "./pages/VerifyCode";
import CreateNewCode from "./pages/CreateNewPassword";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import User from "./pages/Dashbord/User";
import Settings from "./pages/Dashbord/Settings";
import Orders from "./pages/Dashbord/Orders"

import Store from "./pages/Dashbord/Store.jsx"
import Main from "./pages/Dashbord/Main.jsx";
import Revenue from "./pages/Revenue.jsx";
import Cart from "./pages/Cart.jsx";
import Supliers from "./pages/Supliers.jsx";
import OrdersRev from "./pages/OrdersRev.jsx";
import Notfications from "./pages/Notfications.jsx";
import ManageProducts from "./pages/Dashbord/ManageProducts.jsx";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp />}  />
        <Route path = '/forgetpassword' element = {<ForgetPassword />} />
        <Route path='/verifycode' element={<VerifyCode/>}/>
        <Route path='/newpassword' element={<CreateNewCode/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="/supliers" element={<Supliers/>}/>
        <Route path='/revenue' element={<Revenue/>}/>
        <Route path="/revenue/orders" element={<OrdersRev/>}/>
        <Route path="/revenue/notificatiion" element={<Notfications/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/dashboard" element={<Main/>}/>
        <Route path="/dashboard/userinformation" element={<User/>}/>
        <Route path="/dashboard/orders" element={<Orders/>} />
        <Route path="/dashboard/products" element={<ManageProducts/>}/>
        <Route path="/dashboard/store" element={<Store/>}/>
        <Route path="/dashboard/settings" element={<Settings/>}/>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
