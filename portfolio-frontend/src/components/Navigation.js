import React, { useState } from 'react';

function Navigation(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">ZACHERY GOODRICH</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Connect</a>
                    </li>
                </ul>
            </div>
            {/* <ul className='nav'>
                <li className='nav-item'>
                    <a className='nav-link' href='/'>About</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='/projects'>Projects</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Connect</a>
                </li>
            </ul> */}
        </nav>
    )
}

export default Navigation;