import React from 'react';
import Headshot from '../icons/headshot.jpg';

const Header = (props) => {
    return (
        <div className='row bg-primary text-light header-row'>
            <div className='col-md-4 h-100 d-flex justify-content-center align-items-center'>
                <img className='img-fluid rounded-circle h-75' src={Headshot}/>
            </div>
            <div className='col-md-8 d-flex flex-column  justify-content-center'>
                <h1 className='display-3'>Zach Goodrich</h1>
                <p className='lead'>Full-Stack Software Developer, Problem-Solver, Video Game Enthusiast</p>
            </div>
        </div>
    )
}

export default Header;