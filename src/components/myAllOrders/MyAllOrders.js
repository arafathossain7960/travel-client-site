import React from 'react';
import { Card } from 'react-bootstrap';


const MyAllOrders = ({myOrder, setDeleteLoading}) => {
    const {_id, name, email, price,packageName, date, duration}=myOrder;
   
    const handleOrderDelete=(id)=>{
        const proceed = window.confirm('Are you sure the order is delete?');
        if(proceed){
          
         const url = `http://localhost:5000/myorders/${id}`;
         fetch(url,{
           method:"delete",
           headers:{'content-type':'application/json'}
         })
         .then(res=> res.json())
         .then(data => {
           console.log(data)
           if(data.deletedCount<0){
            alert('Your order has been success fully deleted');
            setDeleteLoading(true)
           }else{
             setDeleteLoading(false);
           }
             
             
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
   <p>Email: {email}</p>
   <p>Package: {packageName}</p>
   <p>Destination: {duration}</p>
   <p>Price: $ {price}</p>
   <p>Date: {date}</p>
   <button onClick={()=>handleOrderDelete(_id)} className="btn btn-warning">Delete</button>
   
 </Card.Text>

</Card.Body>
</Card>
        </div>
        
     </div>
    );
};

export default MyAllOrders;