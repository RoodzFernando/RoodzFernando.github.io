import emailjs from 'emailjs-com';
import React, { useState } from 'react'

function Contact() {
    const [responseMsg, setResponseMsg] = useState('')
    
    const handleSubmit = event => {
        event.preventDefault()
        emailjs.sendForm('service_8d5zpkp', 'contact_form', 'msg-form', 'user_DP6MP9QTuR99lXDoMUXCK')
        .then( response => {
          setResponseMsg('Message sent. Thanks for Reaching out!')
        }, error => {
          setResponseMsg(`Message not sent. ${error}`)
        });
    }
    return (
        <div className="contact-page">
            <p>Contact Me section</p>
            <form id="msg-form" onSubmit={handleSubmit}>
                <div className="name-section inputs">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Full Name"  id="name" name="name"/>
                </div>

                <div className="email-section inputs">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email"  id="email" name="email"/>
                </div>

                <div className="msg-section inputs">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Type your message"></textarea>
                </div>
                <button>Send</button>
                <div className="box-info">
                  <span>{ responseMsg }</span>
                </div>
            </form>
        </div>
    )
}

export default Contact
