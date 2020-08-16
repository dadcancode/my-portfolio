import React from 'react';
import Headshot from '../icons/headshot.jpg';

const Header = (props) => {
    return (
        <div className='row mb-3 bg-primary text-light'>
            <div className='col-md-4 d-flex justify-content-center align-items-center h-auto p-4'>
                <img className='img-fluid border border-warning rounded-circle headshot' src={Headshot}/>
            </div>
            <div className='col-md-8 d-flex flex-column justify-content-center h-auto pl-5'>
                <h1>Zach Goodrich</h1>
                <p className='lead'>Full-Stack Software Developer, Problem-Solver, Video Game Enthusiast</p>
            </div>
        </div>
    )
}

export default Header;