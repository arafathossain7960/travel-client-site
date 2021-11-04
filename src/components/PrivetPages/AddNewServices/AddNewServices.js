import React from 'react';
import './AddNewServices.css';
import { useForm } from "react-hook-form";
import { FormCheck } from 'react-bootstrap';

const AddNewServices = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        fetch('http://localhost:5000/addNew',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.insertedId){
                alert('your package added success')
                data.reset();
            }
        
        })
    }
        
  
    return (
        <div className="container text-center my-5">
            <h3 className="mb-3">Add your next destination</h3>
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