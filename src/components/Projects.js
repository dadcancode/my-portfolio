import React from 'react';
import projects from './ProjectData';
import Header from './Header';

function Project() {
    return (
        <div className='container-fluid p-0 component-wrapper'>
            <Header/>
            <div className="row justify-content-md-around mx-auto mt-5">
                {projects.map((val) => {
                    return (
                        <div className='col-md-6 d-flex justify-content-center pb-3'>
                            <div className='card project-card'>
                                <img className='img-card-top project-card-img' src={val.img}/>
                                <div className='card-body pb-2'>
                                    <h4 className='card-title'>{val.name}</h4>
                                    <p className='card-text'>{val.description}</p>
                                    <a className='card-link' href={val.url}>Check it out!</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Project;