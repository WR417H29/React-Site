import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Navbar from './nav';
import '../styles/test.css';

const Main = () => {

    const [cheese, setCheese] = useState(true);
    useEffect(() => {
        Swal.fire("Cheese has changed init n that ", "Message", cheese ? "success" : "error");
    }, [cheese]);

    return (
        <div class='bg'>
            <h2 style={{ padding: '0px', margin: '0px', textDecoration: 'underline' }}>Covid Openings Site</h2> 

            <Navbar />

            <button onClick={()=> { 
                setCheese(!cheese);
            }}>
                Swap Cheese
            </button>

            <div class='textbox'>
                <p> { cheese ? "cheese" : "not cheese 😢" } </p>
            </div>
        </div>
    );
};


export default Main;