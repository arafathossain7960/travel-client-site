
import './App.css';
import Home from './components/HomePage/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PackageDetails from './components/HomePage/TourePackages/PackageDetails/PackageDetails';
import Login from './components/LoginPage/Login/Login';
import Header from './components/HomePage/Header/Header';
import AllOrders from './components/PrivetPages/ManageAllOrders/AllOrders';
import AddNewServices from './components/PrivetPages/AddNewServices/AddNewServices';
import Footer from './components/HomePage/Footer/Footer';

function App() {
  return (
    
     <Router>
    <Header></Header>
      <Switch>
        <Route exact path="/">
      <Home></Home>
      </Route>

      <Route  path="/home">
      <Home></Home>
      </Route>
      <Route path="/singlePackage/:id">
    <PackageDetails></PackageDetails>
      </Route>
      <Route path="/order">

    <AllOrders></AllOrders>
      </Route>
      <Route path="/addNewService">
        <AddNewServices></AddNewServices>
        </Route>

      <Route exact path="/login">
      <Login></Login>
      </Route>
     </Switch>
     <Footer></Footer>
     </Router>
    
  );
}

export default App;
