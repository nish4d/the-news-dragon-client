import React from 'react';
import { Link } from 'react-router-dom';

const Trams = () => {
    return (
        <div>
            <h2>Our trams and condition</h2>
            <p>go back to <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default Trams;