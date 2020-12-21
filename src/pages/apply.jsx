import React, { useState } from 'react';
import Navbar from '../components/nav';

const Apply = () => {

    let id = 0;

    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [openingType, setOpeningType] = useState([{"online": false, "inPerson": false}]);

    const selection = (id) => `
    <select class='odays' id='odays${id}' name='odays${id}'>
    <option value='monday'> Monday </option>
    <option value='tuesday'> Tuesday </option>
    <option value='wednesday'> Wednesday </option>
    <option value='thursday'> Thursday </option>
    <option value='friday'> Friday </option>
    <option value='saturday'> Saturday </option>
    <option value='sunday'> Sunday </option>
    </select>
    <input type='text' class='ohours' name='ohours${id}' placeholder='09:00-17:00' autocomplete='off'>
    <br>`;
    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
        console.log(businessName);
        console.log(location);
        console.log(openingType);
    };

    function newDay() {
        if (id < 7) {
            const child = document.createElement('div');
            child.id = `openDays${id}`;
            child.innerHTML = selection(id);
            document.getElementById("baseDays").appendChild(child);
            id += 1;
        }
    }

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
                    
                    <input type="radio" id="addingham" name="location" value="Addingham" onChange={(e) => setLocation()} /> Addingham

                    <input type="checkbox" id="online" name="openingStyle" value="Online" onChange={(e) => {
                        setOpeningType({ online: e.target.value === "Online", inPerson: openingType.inPerson });
                    }} /> Online

                    <input type="checkbox" id="inPerson" name="openingStyle" value="Inperson" onChange={(e) => {
                        setOpeningType({ online: openingType.online, inPerson: e.target.value === "Inperson"});
                    }} /> In-Person

                    <div className="openDays" id="baseDays">
                        <input type="button" id="newDay" name="newDayBtn" onClick={ newDay() } value="New Day" />
                        <input type="button" id="removeDay" name="removeDayBtn" value="Remove Day" />
                    </div>
                    
                    <button type="submit">Submit</button>
               </form>
            </div>
        </div>
    );
};

export default Apply;