import React from 'react';
import projects from './ProjectData';
import Header from './Header';

function Project() {
    return (
        <div className='component-wrapper'>
            <Header headerText='Current/Recent Projects'/>
            {projects.map((val) => {
                return (
                    <div className='projectCard'>
                        <div className='projectCardImgDiv'>
                            <a href={val.url}><img className='projectCardImg' src={val.img}/></a>
                        </div>
                        <div className='projectCardInfoDiv'>
                            <h4 className='projectCardNameText'>{val.name}</h4>
                            <p className='projectCardDescriptionText'>{val.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Project;