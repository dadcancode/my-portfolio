import React, { useState } from 'react';
import About from './About';

function ViewWindow(props) {

    const renderView = (view) => {
        switch(view) {
            case 'about':
                return <About/>
            break;
        }
    }
    return (
        <div className='view-window-div'>
            {renderView(props.view)}
        </div>
    )
}

export default ViewWindow;