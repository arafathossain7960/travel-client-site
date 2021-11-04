import React from 'react';
import ClinetFeedback from '../ClinetFeedback/ClinetFeedback';
import Facilities from '../Facilities/Facilities';
import Slider from '../Slider/Slider';
import AllPackages from '../TourePackages/AllPackages/AllPackages';
import './Home.css';

const Home = () => {
    return (
        <div>
          
             <Slider></Slider>
            <AllPackages></AllPackages>
            <ClinetFeedback></ClinetFeedback>
            <Facilities></Facilities>
           
        </div>
    );
};

export default Home;