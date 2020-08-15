import React, { useState } from 'react';

function Navigation(props) {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-dark text-light justify-content-between">
            <a className="navbar-brand text-light" href="#">ZACHERY GOODRICH</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link text-light" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="/projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Connect</a>
                    </li>
                </ul>
            </div>
            {/* <ul classNameName='nav'>
                <li classNameName='nav-item'>
                    <a classNameName='nav-link' href='/'>About</a>
                </li>
                <li classNameName='nav-item'>
                    <a classNameName='nav-link' href='/projects'>Projects</a>
                </li>
                <li classNameName='nav-item'>
                    <a classNameName='nav-link' href='#'>Connect</a>
                </li>
            </ul> */}
        </nav>
    )
}

export default Navigation;