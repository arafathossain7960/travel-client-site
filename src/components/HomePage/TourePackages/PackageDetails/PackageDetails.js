import React, { useEffect, useState } from 'react';
import './PackageDetails.css';

import { useForm } from "react-hook-form";
import { useParams } from 'react-router';

const PackageDetails = () => {
    const [packageDetails, setPackageDetails]=useState({});
    const {id}=useParams();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    useEffect(()=>{
        const url =`http://localhost:5000/packageDetails/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data =>setPackageDetails(data))
    },[])
    
    
    // hook from function 
    
    const onSubmit = data =>{
        const packageName=packageDetails.PackageName;
        const price=packageDetails.tourPrice;
        const location=packageDetails.destination;
        const duration=packageDetails.tourOutline;
    const orderData ={packageName, price, duration, ...data};
        fetch(`http://localhost:5000/packageDetails/${id}`,{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(orderData)
        })
        .then(res =>res.json())
        .then(data =>console.log(data))
           
                
            
        
   
    } 
   
    return (
        <div className="container ">
            <div className="text-center my-3">
            <h3>Welcome to <span className="text-primary text-center ">{packageDetails.destination}</span> tour with <b className="text-info">Dream Holidays
                </b> </h3>

            </div>
          
        <div className="row my-3">
         <div className="col-lg-6 col-md-6 col-sm-12">
             <h5 className="my-2">Booking summary</h5>
             <p>Package : {packageDetails.PackageName}</p>
             <p>Destination: {packageDetails.destination}</p>
             <p>Tour duration: {packageDetails.tourOutline}</p>
             <p>Total price : ${packageDetails.tourPrice}</p>

         </div>
         <div className="col-lg-6 col-md-6 col-sm-12 order-from">
             <h5 className="my-2">fill up this form</h5>
         <form onSubmit={handleSubmit(onSubmit)}>
     
      <input className="" type="text" placeholder="Enter your name" {...register("name", {require:true})} />
      <br />
     
      <input type="email" placeholder="Enter your email" {...register("email", { required: true })} />
      <br />

      <input type="date" placeholder="Chose your date" {...register("date", { required: true })} />
      <br />
      <input className="btn btn-primary" type="Submit" />
    </form>
                </div>
        </div>
        </div>
    );
};

export default PackageDetails;