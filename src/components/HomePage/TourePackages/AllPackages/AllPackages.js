import React, { useEffect, useState } from 'react';
import SinglePackage from '../SinglePackage/SinglePackage';
import './AllPackages.css';
const AllPackages = () => {
 const [packages, setPackages]=useState([]);
//  const [isLoading, setIsLoading]=useState(null);

 useEffect(()=>{
    fetch('http://localhost:5000/homepackage')
    .then(res=>res.json())
    .then(data => setPackages(data))

 },[])
    return (
        <div className="my-3 container" >
            <h2 className="text-center  text-primary">Our special packages</h2>
            <div className="row">
                {
                    packages.map(pack => <SinglePackage
                    key={pack.id}
                    pack={pack}
                    ></SinglePackage>)
                }
            </div>
        </div>
    );
};

export default AllPackages;