import React, { useState } from 'react';

function Navigation(props) {
    return (
        <nav className='nav-div'>
            <ul className='nav'>
                <li className='nav-item'>
                    <a className='nav-link' href='/'>About</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='/projects'>Projects</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Connect</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;