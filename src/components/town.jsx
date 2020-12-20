import React from 'react';

import Navbar from './nav';

const Town = ({ name }) => {
    return (
        <div className="bg">
            <Navbar />
            <h2 style={{ padding: '0px', margin: '0px', textDecoration: 'underline' }}>{ name }</h2> 
        </div>
    );
};

export default Town;