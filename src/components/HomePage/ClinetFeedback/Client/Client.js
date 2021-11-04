import React from 'react';
import './Client.css';

const Client = ({ clientFeedback}) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-12  client-container">
        
            <div className=" client ">
                <img src={clientFeedback.imgUrl} alt="" />
                <br />
                
         <h4> { clientFeedback.name}</h4>  
            <hr />
            <p>{clientFeedback.description}</p>
            </div>
     
        </div>
    );
};

export default Client;