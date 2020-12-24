import React, { useState } from 'react';

const Day = ({ day }) => {

    const [time, setTime] = useState('09:00-17:00');

    return (
        <input type='text' className='ohours' id={`ohours${day}`} value={day} onChange={(e) => {
            setTime(e.target.value);
        }}/>
    );
};

export default Day;