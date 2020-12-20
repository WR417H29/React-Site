import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='topnav'>
            <Link to='/'> Home </Link>
            <Link to='#2'> Page 2 </Link>
            <Link to='#3'> Page 3 </Link>
            <Link to='#4'> Page 4 </Link>
        </div>
    );
};

export default Navbar;