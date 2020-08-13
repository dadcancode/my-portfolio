import React from 'react';

const Header = (props) => {
    return (
        <div className='header-div'>
            <h1 className='header-text'>{props.headerText}</h1>
        </div>
    )
}

export default Header;