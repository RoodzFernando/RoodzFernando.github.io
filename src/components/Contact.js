import React, { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners'
import emailjs from 'emailjs-com';
import pageTitle from '../services/tile';

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
    useEffect(() => pageTitle('Contact'))
    const handleSubmit = event => {
        event.preventDefault()
        setLoaderState(!loaderState)
        emailjs.sendForm('service_8d5zpkp', 'contact_form', 'msg-form', 'user_DP6MP9QTuR99lXDoMUXCK')
        .then( response => {
          setResponseMsg('Message sent. Thanks for Reaching out!')
          setFormState({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
          })
          setLoaderState(false)
        }, error => {
          setResponseMsg(`Message not sent. ${error}`)
        });
    }
    return (
        <div className="container">
          <div className="row">
          {/* column 1 */}
            <div className="col-lg-6">
              <h3>I am always interested in hearing about new projects, so if you'd like to chat drop me a line.</h3>
            </div>
            {/* column 2 */}
            <div className="col-lg-6">
              <div className="contact-page">
          {loaderState && <div className="loader">
            <HashLoader 
              loading={loaderState}
              color={color}
            >
            </HashLoader>
          </div>}
              <div className="contact-wrapper">
                <form id="msg-form" onSubmit={handleSubmit}>
                    <div className="firstname-section inputs">
                      <div className="row">
                      {/* column 1 */}
                        <div className="col-lg-6">
                          <div>
                            <input className="form-control" type="text" onChange={handleChange} placeholder="First Name"  id="name" name="name" value={formState.firstName} required/>
                          </div>
                        </div>
                        {/* column 2 */}
                        <div className="col-lg-6">
                          <div>
                            <input className="form-control" type="text" onChange={handleChange} placeholder="Last Name"  id="name" name="name" value={formState.lastName} required/>
                          </div>
                        </div>
                      </div>
                    </div>

    
                    <div className="email-section inputs">
                      <div>
                        <input className="form-control" type="email" onChange={handleChange} placeholder="Email"  id="email" name="email" value={formState.email} required/>
                      </div>
                    </div>
    
                    <div className="msg-section inputs">
                        <div>
                          <textarea className="form-control" name="message" onChange={handleChange} id="message" required cols="30" rows="10" value={formState.message} placeholder="Type your message"></textarea>
                        </div>
                    </div>
                    <div className="send-btn">
                      <button className="btn btn-primary">Get in touch</button>
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
            </div>
          </div>
        </div>
    )
}

export default Contact
