import React from 'react';
//import Swal from 'sweetalert2';

import Navbar from '../components/nav';

const Main = () => {

    /*const [cheese, setCheese] = useState(true);
    useEffect(() => {
        Swal.fire("Cheese has changed init n that ", "Message", cheese ? "success" : "error");
    }, [cheese]);*/

    return (
        <div className='bg'>
            <Navbar />

            <h2 style={{ padding: '0px', margin: '0px', textDecoration: 'underline' }}>Covid Openings Site</h2> 

            <div className='textbox'>
                <p> Text Box </p>
            </div>
        </div>
    );
};


export default Main;