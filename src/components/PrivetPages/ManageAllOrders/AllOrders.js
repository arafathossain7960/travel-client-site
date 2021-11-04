import React from 'react';
import './AllOrders.css';
import  { useEffect, useState } from 'react';
import OrdersTable from '../OrdersTable/OrdersTable';

const AllOrders = () => {
    const [allOrders, setAllOrders]= useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/order')
        .then(res=>res.json())
        .then(data =>setAllOrders(data))
    },[])
    
    return (
        <div className="container">
            <div className="row g-3">
            {
                allOrders.map(allOrder => <OrdersTable
                key={allOrder._id}
                order={allOrder}
                ></OrdersTable>)
            }
            </div>

            </div>
          
               
        
    );
};

export default AllOrders;