import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import apiKeys from '../config/apiKeys';
import Header from './Header';

function Connect () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
        .then(
            result => {
                console.log(result.text)
                setName('');
                setEmail('');
                setMessage('');
            },
            error => {
                console.log(error.text)
            }
        )
    }


    return (
        <div className='container-fluid p-0 component-wrapper'>
            <Header />
            <div className='row justify-content-center mt-5'>
                <div className='col-xs-10 col-lg-6 bg-primary text-light rounded'>
                    <h4 className='text-center border-bottom border-warning my-3 pb-3 border-width-3'>Let's build something!</h4>
                    <form onSubmit={(e) => {
                        sendEmail(e);
                    }}>
                        <div className='form-group'>
                            <input name='name' id='name' className='form-control' type='text' value={name} onChange={(e) => {
                                setName(e.target.value)
                            }} placeholder='Your Name'/>
                        </div>
                        <div className='form-group'>
                            <input name='email' value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }} id='email' className='form-control' type='text' placeholder='email@example.com'/>
                        </div>
                        <div className='form-group'>
                            <textarea value={message} onChange={(e) => {
                                setMessage(e.target.value)
                            }} name='message' id='message' className='form-control' rows='3' placeholder='Your Message...'></textarea>
                        </div>
                        <div className='form-group d-flex justify-content-end'>
                            <button type='submit' className='btn btn-light text-primary w-25'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Connect;