import React, { useState } from 'react';
import '../App.css';
import ProblemSolvingIcon from '../icons/problem_solving.png';
import SystematicThinkingIcon from '../icons/systematic_thinking.png';
import CommunicationIcon from '../icons/communication.png';
import TimeManagementIcon from '../icons/time_management.png';
import Header from './Header';

function About() {
    return (
        <div className='component-wrapper'>
            <Header headerText='Zach Goodrich'/>            
            <div id='about-general-div'>
                I am problem solver that specializes in full-stack developement. I help small businesses and corporations bring their ideas to life.
            </div>
            {/* <div>
                <p className='reg-text' id='about-strengths-general-text'>Developing ideas into functional products can be challenging. These are the strengths I bring to the project to tackle those challenges:</p>
            </div> */}
            <div className="container-fluid" id='about-strengths-list-div'>
                <div className='row justify-content-center' >
                    <div className='col-sm-12 d-flex align-items-stretch'>
                        <div className='card strength-card' >
                            <img className='img-card-top' src={ProblemSolvingIcon}/>
                            <div className='card-body'>
                                <h5 className='card-title strength-card-title'>Problem Solving</h5>
                                <p className='card-text strength-card-text'>I am able to analyze loose concepts and goals and break them down into manageable pieces</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 d-flex align-items-stretch'>
                        <div className='card strength-card'>
                            <img className='img-card-top' src={SystematicThinkingIcon}/>
                            <div className='card-body'>
                                <h5 className='card-title strength-card-title'>Systemactic Thinking</h5>
                                <p className='card-text strength-card-text'>I am able to structure complicated systems with multiple components abstractly.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 d-flex align-items-stretch'>
                        <div className='card strength-card'>
                            <img className='img-card-top' src={CommunicationIcon}/>
                            <div className='card-body'>
                                <h5 className='card-title strength-card-title'>Communication</h5>
                                <p className='card-text strength-card-text'>I can break down a topic concisely which speeds up commuication and efficiency.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 d-flex align-items-stretch'>
                        <div className='card strength-card'>
                            <img className='img-card-top' src={TimeManagementIcon}/>
                            <div className='card-body'>
                                <h5 className='card-title strength-card-title'>Time-Management</h5>
                                <p className='card-text strength-card-text'>I am able to work autonomously, meet deadlines, and plan out projects with the goal of delivering a complete product that meets clients requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;