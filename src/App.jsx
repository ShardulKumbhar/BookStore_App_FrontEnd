import "./App.css";
import Login from "./components/login/Login";
import SignUp from "./components/signUp/SignUp";
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from "./components/home/Home";
import ForgotPassword from "./components/Forgot password/ForgotPassword";
import ResetPassword from "./components/reset password/ResetPassword";
import AddBook from "./components/Book/AddBook";
import Libarary from "./components/Libarary/Libarary";
import Footer from "./components/Footer/Footer";

import Cart from "./components/Cart/Cart";
import Order from "./components/Cart/Order";




function App() {
  return (
    <div>
   
    <BrowserRouter>
    <Switch>
    
      <Route exact path='/login' component={Login}></Route>
     
      <Route path='/signUp' component={SignUp}></Route>
      <Route path='/forgotPassword' component={ForgotPassword}></Route>
      <Route path='/resetPassword' component={ResetPassword}></Route>
      <Route path='/addBook' component={AddBook}></Route>
      <Route path='/libarary' component={Libarary}></Route>
      <Route path='/cart' component={Cart}></Route>
      <Route path='/order' component={Order}></Route>
   

      
      <Route path='/'  component={Home}></Route>
      
    </Switch>
 </BrowserRouter>
<Footer/>

 </div>
  );
}

export default App;
