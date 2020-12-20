import React, { useState } from 'react';
import Navbar from '../components/nav';

const Apply = () => {

    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [businessName, setBusinessName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
        console.log(businessName);
        console.log(location);
    };


    return(
        <div className='bg'>
            <Navbar />
            <h2 style={{ padding: "0px", margin: "0px", textDecoration: "underline"}}> Applications </h2>

            <div className='form-box'>
                <form className='form' onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" name="businessName" placeholder="Business Name" autoComplete="off" onChange={(e) => setBusinessName(e.target.value)} />
                    
                    <input type="radio" id="burley" name="location" value="Burley" onChange={(e) => setLocation(e.target.value)} /> Burley

                    <input type="radio" id="ilkley" name="location" value="Ilkley" onChange={(e) => setLocation(e.target.value)} /> Ilkley
                    
                    <input type="radio" id="addingham" name="location" value="Addingham" onChange={(e) => setLocation(e.target.value)}/> Addingham
                    
                    <button type="submit">Submit</button>
               </form>
            </div>
        </div>
    );
};

export default Apply;