import React, {useState, useEffect} from 'react';
import Client from './Client/Client';
import './ClinetFeedback.css';

const ClinetFeedback = () => {
    const [feedback, setFeedback]=useState([]);

    useEffect(()=>{
        fetch('https://morning-ravine-36607.herokuapp.com/feedback')
        .then(res=>res.json())
        .then(data =>setFeedback(data))

    },[])
    return (
        <div className='container my-3'>
            <div className="text-center my-3">
                <h3 className="text-info">our client Feed back</h3>
            </div>

            <div className='row g-3'>
                {
                    feedback.map(feedback=><Client
                    key={feedback._id}
                    clientFeedback={feedback}
                    ></Client>)
                }
            </div>
        </div>
    );
};

export default ClinetFeedback;