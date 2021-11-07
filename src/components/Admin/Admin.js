import React, { useState } from 'react';
import AllPackages from '../HomePage/TourePackages/AllPackages/AllPackages';
import PackageDetails from '../HomePage/TourePackages/PackageDetails/PackageDetails';
import Login from '../LoginPage/Login/Login';
import AddNewServices from '../PrivetPages/AddNewServices/AddNewServices';
import AllOrders from '../PrivetPages/ManageAllOrders/AllOrders';
import MyOrders from '../PrivetPages/MyOrders/MyOrders';
import './Admin.css';


const Admin = () => {
    const [adminShow, setAdminShow]=useState('AddNewServices')
   
    return (
        <div className=" row">
            <div className="col-10">
            {
                adminShow ==="AddNewServices"&& <AddNewServices></AddNewServices>
            }
             {
                adminShow ==="Services"&& <AllPackages></AllPackages>
            }

              {
                adminShow ==="MyOrders"&& <MyOrders></MyOrders>
            }

              {
                adminShow ==="AllOrders"&& <AllOrders></AllOrders>
            }
              {
                adminShow ==="Login"&& <Login></Login>
            }
            </div>
            <div className="col-2  adminDashboard">
                <p>Admin Dashboard</p>
                <ul>
                    <li onClick={()=>setAdminShow("AddNewServices")}
                    >Add New Services</li>

                    <li onClick={()=>setAdminShow("Services")}>All Services</li>


                    <li onClick={()=>setAdminShow("MyOrders")}>My Orders</li>


                    <li onClick={()=>setAdminShow("AllOrders")}>All Orders</li>


    
                    <li onClick={()=>setAdminShow("Login")}>Long in</li>
                    

                </ul>
            </div>
            
        </div>
    );
};

export default Admin;