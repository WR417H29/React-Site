import axios from 'axios';
import React, { useState, useEffect } from 'react';
//import Swal from 'sweetalert2';

import Navbar from '../components/nav';

const Main = () => {

    // This is just an example of how to use the data

    const [data, setData] = useState(null);
    
    useEffect(() => {
        (async () => {
            const data2 = await axios.get(
                'https://local-business-checker.herokuapp.com/all',
                {
                    headers: {"Access-Control-Allow-Origin": "*"}
                }
            );

            setData(JSON.stringify(data2.data.all, null, 2));
        })();
    });


    return (
        <div className='bg'>
            <Navbar />

            <h2 style={{ padding: '0px', margin: '0px', textDecoration: 'underline' }}>Covid Openings Site</h2> 

            <div className='textbox'>
                <p> Text Box </p>
            </div>

            { data && <pre>{data}</pre>}
        </div>
    );
};


export default Main;