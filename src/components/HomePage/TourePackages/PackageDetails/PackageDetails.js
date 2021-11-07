import React, { useEffect, useState } from 'react';
import './PackageDetails.css';

import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const PackageDetails = () => {
const {user}=useAuth();
    const [packageDetails, setPackageDetails]=useState({});
    const {id}=useParams();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    useEffect(()=>{
        const url =`https://morning-ravine-36607.herokuapp.com/packageDetails/${id}`;
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
        const email=user?.email;
    const orderData ={packageName, price, duration,email, ...data};
        fetch(`https://morning-ravine-36607.herokuapp.com/packageDetails/${id}`,{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(orderData)
        })
        .then(res =>res.json())
        .then(data =>{
            alert('your order success fully added');
           
        })
           
                
        
   
    } 
   
    return (
        <div className="container py-3 ">
            <div className="text-center my-3">
            <h3>Welcome to <span className="text-primary text-center ">{packageDetails.destination}</span> tour with <b className="text-info">Dream Holidays
                </b> </h3>
                <h5>Please confirm you booking</h5>

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
     
      <input type="text" placeholder="Enter your phone" {...register("phone", { required: true })} />
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