import React from 'react';
import './AllOrders.css';
import  { useEffect, useState } from 'react';
import OrdersTable from '../OrdersTable/OrdersTable';

const AllOrders = () => {
    const [deleteOrderLoading, setDeleteOrderLoading]=useState(null)
    const [allOrders, setAllOrders]= useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/order')
        .then(res=>res.json())
        .then(data =>setAllOrders(data))
    },[deleteOrderLoading])
    
    return (
        <div className="container">
             <div className="text-center text-info py-3"><h3>Here are all orders</h3></div>
            <div className="row g-3">
            {
                allOrders.map(allOrder => <OrdersTable
                setDeleteOrderLoading={setDeleteOrderLoading}
                key={allOrder._id}
                order={allOrder}
                ></OrdersTable>)
            }
            </div>

            </div>
          
               
        
    );
};

export default AllOrders;