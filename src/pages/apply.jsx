import React, { useState } from 'react';
import Navbar from '../components/nav';

const Apply = () => {

    let id = 0;

    const [email, setEmail] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [location, setLocation] = useState('Burley');
    const [openingType, setOpeningType] = useState([{"online": false, "inPerson": false}]);
    const [openDays, setOpenDays] = useState([{
        mon: {
            "open": false,
            "time": ["0900", "1700"]
        },
        tue: {
            "open": false,
            "time": ["0900", "1700"]
        },
        wed: {
            "open": false,
            "time": ["0900", "1700"]
        },
        thu: {
            "open": false,
            "time": ["0900", "1700"]
        },
        fri: {
            "open": false,
            "time": ["0900", "1700"]
        },
        sat: {
            "open": false,
            "time": ["0900", "1700"]
        },
        sun: {
            "open": false,
            "time": ["0900", "1700"]
        }
    }]);
    const [address, setAddress] = useState([{
        "Postcode": '',
        "Town": '',
        "LineOne": '',
        "LineTwo": '',
    }]);

    const selection = (id) => `
    <select className='odays' id='odays${id}' name='odays${id}' value={odays${id}} onChange={(e) => setOpenDays{
        if (e.target.value === "monday") {
            setOpenDays{
                ...openDays,
                mon: {
                    open: true,
                    time: [ohours${id}.split("-")]                    
                }
            }
        }
    }}>
        <option value='monday'> Monday </option>
        <option value='tuesday'> Tuesday </option>
        <option value='wednesday'> Wednesday </option>
        <option value='thursday'> Thursday </option>
        <option value='friday'> Friday </option>
        <option value='saturday'> Saturday </option>
        <option value='sunday'> Sunday </option>
    </select>
    <input type='text' className='ohours' id='ohours${id}' name='ohours${id}' placeholder='09:00-17:00' autocomplete='off'>
    <br>`;

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Email: " + email);
        console.log("BName: " + businessName);
        console.log("Location: " + location);
        console.log("Online / Inperson: " + openingType);
        console.log(openingType);
        console.log("Open Days: " + openDays);
        console.log(openDays);
        console.log("Address: " + address);
        console.log(address);
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

                    { /* Standard Inputs (Email, Business Etc) */ }

                    <input style={{ margin: "10px" }} type="email" name="email" placeholder="Email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
                    <input style={{ margin: "10px" }} type="text" name="businessName" placeholder="Business Name" autoComplete="off" onChange={(e) => setBusinessName(e.target.value)} />
                    
                    <p style={{ padding: "0px", margin: "0px" }}> Location </p>

                    { /* Location Selection Dropdown Menu */}

                    <select style={{ margin: "10px" }} id="location" name="location" value={location} onChange={(e) => {setLocation(e.target.value)}}>
                        <option value="Burley"> Burley </option>
                        <option value="Ilkley"> Ilkley </option>
                        <option value="Addingham"> Addingham </option>
                    </select>

                    { /* Store Opening Style Selection Menu */ }

                    <input style={{ margin: "10px" }} type="checkbox" id="online" name="openingStyle" value="Online" onChange={(e) => {
                        setOpeningType({ online: e.target.value === "Online", inPerson: openingType.inPerson });
                    }} /> Online

                    <input style={{ margin: "10px" }} type="checkbox" id="inPerson" name="openingStyle" value="Inperson" onChange={(e) => {
                        setOpeningType({ online: openingType.online, inPerson: e.target.value === "Inperson"});
                    }} /> In-Person

                    { /* Open Days Choice */ }

                    <div className="openDays" id="baseDays">
                        <input style={{ margin: "10px" }} type="button" id="newDay" name="newDayBtn" onClick={ newDay } value="New Day" />
                    </div>
                    <div>
                        <input style={{ margin: "10px" }} type="button" id="removeDay" name="removeDayBtn" onClick={ removeDay } value="Remove Day" />
                    </div>
                    
                    { /* Location Selection */ }

                    <input style={{ margin: "10px" }} type="text" placeholder="Postcode" autoComplete="off" name="postcode" onChange={(e) => {
                        setAddress({ Postcode: e.target.value, Town: address.Town, LineOne: address.LineOne, LineTwo: address.LineTwo})
                    }} />

                    <input style={{ margin: "10px" }} type="text" placeholder="Town" autoComplete="off" name="town" onChange={(e) => {
                        setAddress({Postcode: address.Postcode, Town: e.target.value, LineOne: address.LineOne, LineTwo: address.LineTwo})
                    }}/>

                    <input style={{ margin: "10px" }} type="text" placeholder="Address line 1" autoComplete="off" name="addressLineOne" onChange={(e) => {
                        setAddress({Postcode: address.Postcode, Town: address.Town, LineOne: e.target.value, LineTwo: address.LineTwo})
                    }}/>

                    <input style={{ margin: "10px" }} type="text" placeholder="Address line 2" autoComplete="off" name="addressLineTwo" onChange={(e) => {
                        setAddress({Postcode: address.Postcode, Town: address.Town, LineOne: address.LineOne, LineTwo: e.target.value})
                    }}/>
                    
                    { /* Website Linking */ }

                    <input style={{ margin: "10px" }} type="text" placeholder="Website Link" autoComplete="off" name="websiteLink" />
                    
                    <button type="submit">Submit</button>
               </form>
            </div>
        </div>
    );
};

export default Apply;