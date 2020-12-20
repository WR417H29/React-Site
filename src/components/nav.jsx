import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const style = {
        padding: '5px',
        paddingRight: '25px',
        paddingLeft: '25px',
        backgroundColor: '#373d48',
        borderRadius: '5px',
        textDecoration: 'underline',
        textDecorationColor: 'red'
    };

    // <NavLink class={ active ? active : inactive } to='x' > (page name) </NavLink> 

    return (
        <nav className='topnav'>
            <NavLink exact activeStyle={style} to='/'>Home</NavLink>
            <NavLink exact activeStyle={style} to='/burley'>Burley</NavLink>
            <NavLink exact activeStyle={style} to='/ilkley'>Ilkley</NavLink>
            <NavLink exact activeStyle={style} to='/addingham'>Addingham</NavLink>
            <NavLink exact activeStyle={style} to='/apply'>Apply</NavLink>
        </nav>
    );
};

export default Navbar;