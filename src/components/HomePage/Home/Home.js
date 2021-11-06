import React from 'react';
import ClinetFeedback from '../ClinetFeedback/ClinetFeedback';
import Feature from '../Feature/Feature';
import Slider from '../Slider/Slider';
import AllPackages from '../TourePackages/AllPackages/AllPackages';
import './Home.css';

const Home = () => {
    return (
        <div>
          
             <Slider></Slider>
            <AllPackages></AllPackages>
            <ClinetFeedback></ClinetFeedback>
            <Feature></Feature>
           
        </div>
    );
};

export default Home;