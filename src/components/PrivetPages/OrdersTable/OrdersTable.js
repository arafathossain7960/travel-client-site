import React from 'react';
import { Card } from 'react-bootstrap';
import './OrdersTable.css';
const OrdersTable = ({order, children}) => {
    const {_id, name, email, price,packageName, date, duration}=order;
 
 // delete function
 const handleOrderDelete=(id)=>{
   const proceed = window.confirm('Are you sure the order is delete?');
   if(proceed){
    const url = `http://localhost:5000/deleteOrder/${id}`;
    fetch(url,{
      method:"delete",
      headers:{'content-type':'application/json'}
    })
    .then(res=> res.json())
    .then(data => {
    
    })
   }
 }
    return (
        <div className="col-lg-3 col-md-4 col-sm-12">
           <div>
         <Card >
  <Card.Body>
    <Card.Title>Visitor: {name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
    <Card.Text>
      <p>Package: {packageName}</p>
      <p>Destination: {duration}</p>
      <p>Price: $ {price}</p>
      <p>Date: {date}</p>
      <button onClick={()=>handleOrderDelete(_id)} className="btn btn-warning">Delete</button>
      <button className="btn btn-info">Update</button>
    </Card.Text>
  
  </Card.Body>
</Card>
           </div>
           
        </div>
    );
};

export default OrdersTable;