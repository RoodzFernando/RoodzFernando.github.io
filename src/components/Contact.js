import React, { useState } from 'react'
import { HashLoader } from 'react-spinners'
import emailjs from 'emailjs-com';

function Contact() {
    const [responseMsg, setResponseMsg] = useState('')
    const [color] = useState("#DD6031");
    const form = document.getElementById('msg-form')
    const [formState, setFormState] = useState({
      name: '',
      email: '',
      message: ''
    })
    const [loaderState, setLoaderState] = useState(false)
    const handleChange = event => {
      const {name, value} = event.target
      setFormState({
        [name]: value
      })
    }
    const handleSubmit = event => {
        event.preventDefault()
        setLoaderState(!loaderState)
        emailjs.sendForm('service_8d5zpkp', 'contact_form', 'msg-form', 'user_DP6MP9QTuR99lXDoMUXCK')
        .then( response => {
          setResponseMsg('Message sent. Thanks for Reaching out!')
          setFormState({
            name: '',
            email: '',
            message: ''
          })
          setLoaderState(false)
        }, error => {
          setResponseMsg(`Message not sent. ${error}`)
        });
    }
    return (
        <div className="contact-page">
        {loaderState && <div className="loader">
          <HashLoader 
            loading={loaderState}
            color={color}
          >
          </HashLoader>
        </div>}
            <div className="contact-wrapper">
              <p>Please leave me a Message!</p>
              <form id="msg-form" onSubmit={handleSubmit}>
                  <div className="name-section inputs">
                    <div>
                      <label htmlFor="name">Name:</label>
                    </div>
                    <div>
                      <input type="text" onChange={handleChange} placeholder="Full Name"  id="name" name="name" value={formState.name} required/>
                    </div>
                  </div>
  
                  <div className="email-section inputs">
                    <div>
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div>
                      <input type="email" onChange={handleChange} placeholder="Email"  id="email" name="email" value={formState.email} required/>
                    </div>
                  </div>
  
                  <div className="msg-section inputs">
                      <div>
                        <label htmlFor="message">Message:</label>
                      </div>
                      <div>
                        <textarea name="message" onChange={handleChange} id="message" required cols="30" rows="10" value={formState.message} placeholder="Type your message"></textarea>
                      </div>
                  </div>
                  <span className="info">All fields are required.</span>
                  <div className="send-btn">
                    <button>Send</button>
                  </div>
                  {
                    responseMsg&&
                  <div className="box-info" style={{
                    'border': '1px solid #fff'
                  }}>
                    <span>{ responseMsg }</span>
                  </div>
                  }
              </form>
            </div>
        </div>
    )
}

export default Contact
