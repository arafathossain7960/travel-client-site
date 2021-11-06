import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MyAllOrders from '../../myAllOrders/MyAllOrders';
import './MyOrders.css';

const MyOrders = () => {
    const [deleteLoading, setDeleteLoading]=useState(null);
    const [myOrders, setMyOrders]=useState([])
    const {user}=useAuth();
    const email =user?.email;
    useEffect(()=>{
        const url= `http://localhost:5000/myorders/${email}`;
        fetch(url)
        .then(res=> res.json())
        .then(data =>setMyOrders(data))
    },[deleteLoading])

    return (
        <div className="row py-5">
            <div className="text-center text-info py-3"><h3>See your all orders</h3></div>
            {
               myOrders?.map(myOrder =><MyAllOrders
               setDeleteLoading={setDeleteLoading}
               key={myOrder._id}
               myOrder={myOrder}
               ></MyAllOrders> )
            }
           
           
         
           </div>  
    );
};

export default MyOrders;