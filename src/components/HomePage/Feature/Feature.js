import React from 'react';
import './Feature.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import feature from '../../../img/img/feature5.png';

const Feature = () => {
    return (
        <div className="container py-5">
            <div className='text-center text-info'><h1>Our special feature</h1></div>
            <div className="row pt-3">
                <div className="col-sm-12 col-md-6 col-lg-6">
                        <p> <FontAwesomeIcon icon={faArrowAltCircleUp} /> Stay in super deluxe 5 Star hotel</p>
                        <p> <FontAwesomeIcon icon={faArrowAltCircleUp} /> Transport using A/C cars</p>
                        <p> <FontAwesomeIcon icon={faArrowAltCircleUp} /> Special food menu with breakfast</p>
                        <p><FontAwesomeIcon icon={faArrowAltCircleUp} /> Special child handing care</p>
                        <p><FontAwesomeIcon icon={faArrowAltCircleUp} /> Help with visa and others document processing</p>
                       
                </div>
                    <div  className="col-sm-12 col-md-6 col-lg-6">
                   <img src={feature} alt="" />
                    </div>
            </div>
            
        </div>
    );
};

export default Feature;