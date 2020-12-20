import React from 'react';
import '../styles/test.css';

const Test = () => {
    return (
        <div class='bg'>
            <div class='topnav'> 
                <a class='active' href='#1'> Home </a>
                <a href='#2'> Page 2 </a>
                <a href='#3'> Page 3 </a>
                <a href='#4'> Page 4 </a>
            </div>

            <div class='textbox'>
                <p> Test </p>
            </div>
        </div>
    );
};

export default Test;