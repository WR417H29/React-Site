import React, { useState } from 'react';
import Navbar from '../components/nav';

const Apply = () => {

    let id = 0;

    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [openingType, setOpeningType] = useState([{"online": false, "inPerson": false}]);
    const [openDays, setOpenDays] = useState([{
        "mon": {
            "open": false,
            "time": ["0000", "2300"]
        },
        "tue": {
            "open": false,
            "time": ["0000", "2300"]
        },
        "wed": {
            "open": false,
            "time": ["0000", "2300"]
        },
        "thu": {
            "open": false,
            "time": ["0000", "2300"]
        },
        "fri": {
            "open": false,
            "time": ["0000", "2300"]
        },
        "sat": {
            "open": false,
            "time": ["0000", "2300"]
        },
        "sun": {
            "open": false,
            "time": ["0000", "2300"]
        }
    }]);
    const [address, setAddress] = useState([{
        "Postcode": '',
        "Town": '',
        "Line-One": '',
        "Line-Two": '',
    }]);

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
            document.getElementById("baseDays").append(child);
            id += 1;
        }
    };

    function removeDay() {
        if (id > 0) {
            id -= 1;
            const day = document.getElementById(`openDays${id}`);
            day.parentNode.removeChild(day);
        }
    };

    return(
        <div className='bg'>
            <Navbar />
            <h2 style={{ padding: "0px", margin: "0px", textDecoration: "underline"}}> Applications </h2>

            <div className='form-box'>
                <form className='form' onSubmit={handleSubmit}>
                    <input style={{ margin: "10px" }} type="email" name="email" placeholder="Email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
                    <input style={{ margin: "10px" }} type="text" name="businessName" placeholder="Business Name" autoComplete="off" onChange={(e) => setBusinessName(e.target.value)} />
                    
                    <p style={{ padding: "0px", margin: "0px" }}> Location </p>

                    <select style={{ margin: "10px" }} id="location" name="location">
                        <option value="burley"> Burley </option>
                        <option value="ilkley"> Ilkley </option>
                        <option value="addingham"> Addingham </option>
                    </select>

                    <input style={{ margin: "10px" }} type="checkbox" id="online" name="openingStyle" value="Online" onChange={(e) => {
                        setOpeningType({ online: e.target.value === "Online", inPerson: openingType.inPerson });
                    }} /> Online

                    <input style={{ margin: "10px" }} type="checkbox" id="inPerson" name="openingStyle" value="Inperson" onChange={(e) => {
                        setOpeningType({ online: openingType.online, inPerson: e.target.value === "Inperson"});
                    }} /> In-Person

                    <div className="openDays" id="baseDays">
                        <input style={{ margin: "10px" }} type="button" id="newDay" name="newDayBtn" onClick={ newDay } value="New Day" />
                    </div>
                    <div>
                        <input style={{ margin: "10px" }} type="button" id="removeDay" name="removeDayBtn" onClick={ removeDay } value="Remove Day" />
                    </div>
                    
                    <input style={{ margin: "10px" }} type="text" placeholder="Postcode" autoComplete="off" name="postcode" />
                    <input style={{ margin: "10px" }} type="text" placeholder="Town" autoComplete="off" name="town" />
                    <input style={{ margin: "10px" }} type="text" placeholder="Address line 1" autoComplete="off" name="addressLineOne" />
                    <input style={{ margin: "10px" }} type="text" placeholder="Address line 2" autoComplete="off" name="addressLineTwo" />
                    

                    <input style={{ margin: "10px" }} type="text" placeholder="Website Link" autoComplete="off" name="websiteLink" />
                    
                    <button type="submit">Submit</button>
               </form>
            </div>
        </div>
    );
};

export default Apply;