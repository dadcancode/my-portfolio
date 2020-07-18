import React from 'react';
import TicTacAttackIcon from '../icons/tic-tac-attack-screenshot.PNG';

function Project() {
    return (
        <div className='component-wrapper'>
            <h2>Projects</h2>
            <div className='container-fluid' id="project-div">
                <div className='card mb-3'>
                    <div className="row no-gutters">
                        <div className='col-md-4'>
                            <img className='card-img' src={TicTacAttackIcon} />
                        </div>
                        <div className='col-md-8'>
                            <div className='card-body'>
                                <h5 className='card-title'>Tic-Tac-Attack!</h5>
                                <p className='card-text'>Classic Tic-Tac-Toe, challenge your friends to see who survives this tic-tac-attack!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project;