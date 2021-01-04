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
            <p>Please leave me a Message!</p>
            <form id="msg-form" onSubmit={handleSubmit}>
                <div className="name-section inputs">
                  <div>
                    <label htmlFor="name">Name</label>
                  </div>
                  <div>
                    <input type="text" placeholder="Full Name"  id="name" name="name" required/>
                  </div>
                </div>

                <div className="email-section inputs">
                  <div>
                      <label htmlFor="email">Email</label>
                  </div>
                  <div>
                    <input type="email" placeholder="Email"  id="email" name="email" required/>
                  </div>
                </div>

                <div className="msg-section inputs">
                    <div>
                      <label htmlFor="message">Message</label>
                    </div>
                    <div>
                      <textarea name="message" id="message" required cols="30" rows="10" placeholder="Type your message"></textarea>
                    </div>
                </div>
                <span className="info">All fields are required.</span>
                <div className="send-btn">
                  <button>Send</button>
                </div>
                <div className="box-info">
                  <span>{ responseMsg }</span>
                </div>
            </form>
        </div>
    )
}

export default Contact
