import React from 'react';
import { Link } from 'react-router-dom';
import './SinglePackage';

const SinglePackage = ({pack}) => {
    const {_id,PackageName,destination, imgUrl, description,tourPrice }=pack;
    return (
        <div className="col-lg-4 col-md-4 col-sm-12 g-5 ">
            <img src={imgUrl} alt="" />
            <h4>{PackageName}</h4>
            <h6>Destination : {destination}</h6>
            <p>Price : $ {tourPrice}</p>
            
            <p>{description.slice(10)}</p>
            
            <Link to={`singlePackage/${_id}`}><button className="btn btn-info">Book Now</button></Link>
        </div>
    );
};

export default SinglePackage;