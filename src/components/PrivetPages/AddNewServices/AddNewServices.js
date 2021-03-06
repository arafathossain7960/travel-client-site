import React from 'react';
import './AddNewServices.css';
import { useForm } from "react-hook-form";
import { FormCheck } from 'react-bootstrap';

const AddNewServices = () => {
    const {reset}=useForm();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        fetch('https://morning-ravine-36607.herokuapp.com/addNew',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.insertedId){
                alert('your package added success')
                
            }
        
        })
       
       
    }
        
  
    return (
        <div className="container text-center my-5">
            <h3 className="mb-3 text-info">Add your next destination</h3>
         <div className="addNewPackage">
     <form onSubmit={handleSubmit(onSubmit)}>
     
      <input type="text" placeholder="Enter package name"  {...register("PackageName",{ required: true } )} />
      
     <br />
      <input type="text" placeholder="Enter destination" {...register("destination", { required: true })} />
      <br />
      <input type="number" placeholder="Enter price value" {...register("tourPrice", { required: true })} />
      <br />

      <input type="text" placeholder="Enter image URL " {...register("imgUrl", { required: true })} />
      <br />
      <input type="text" placeholder="Short description" {...register("description", { required: true })} />
        <br />
      {errors.exampleRequired && <span>This field is required</span>}
      <br />
      
      <input className="btn btn-primary" type="submit" />
    </form>
        </div>
        </div>
    );
};

export default AddNewServices;