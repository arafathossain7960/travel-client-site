import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer row gx-5">
            <div className="col-sm-12 col-md-6 col-lg-6 footer-info">
                <p>Schedule</p>
                <p>New destination</p>
                <p>Success trip</p>
            </div>

          
           <div className="col-sm-12 col-md-6 col-lg-6 footer-contact">
                <p>Email: dreamholydays@gamil.com</p>
                <p>Phone: 000124578</p>
                <p>Office: #1/02, AKH Tower, new city, Dhaka</p>
           </div>
           <small className="text-center my-3">All copy right &copy; by dream holydays </small>
        </div>
    );
};

export default Footer;