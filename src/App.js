
import './App.css';
import Home from './components/HomePage/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PackageDetails from './components/HomePage/TourePackages/PackageDetails/PackageDetails';
import Login from './components/LoginPage/Login/Login';
import Header from './components/HomePage/Header/Header';
import AllOrders from './components/PrivetPages/ManageAllOrders/AllOrders';
import AddNewServices from './components/PrivetPages/AddNewServices/AddNewServices';
import Footer from './components/HomePage/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import PrivetRoute from './components/LoginPage/PrivetRoute/PrivetRoute';
import Admin from './components/Admin/Admin';
import MyOrders from './components/PrivetPages/MyOrders/MyOrders';

function App() {
  return (
    <AuthProvider>
     <Router>
    <Header></Header>
      <Switch>
        <Route exact path="/">
      <Home></Home>
      </Route>

      <Route  path="/home">
      <Home></Home>
      </Route>
      <PrivetRoute  path="/myorder">
      <MyOrders></MyOrders>
      </PrivetRoute>
      <PrivetRoute  path="/admin">
      <Admin></Admin>
      </PrivetRoute>

      <PrivetRoute path="/singlePackage/:id">
    <PackageDetails></PackageDetails>
      </PrivetRoute>
      <PrivetRoute path="/order">

    <AllOrders></AllOrders>
      </PrivetRoute>
      <PrivetRoute path="/addNewService">
        <AddNewServices></AddNewServices>
        </PrivetRoute>

      <Route exact path="/login">
      <Login></Login>
      </Route>
     </Switch>
     <Footer></Footer>
     </Router>
     </AuthProvider>
    
  );
}

export default App;
