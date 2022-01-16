
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Main() {
return (
    <nav>
        {/* <h3>Logo</h3> */}
        <ul className='topnav'>
        <Link className='active' to="Home">
            <li>Home</li>
            </Link>
            <Link className='active' to="apple">
            <li>Apple</li>
            </Link>
            <Link className='active' to="orange">
            <li>Orange</li>
            </Link>
            <Link className='active' to="banana">
            <li>Banana</li>
            </Link>
        </ul>
    </nav>
);

}

export default Main;

