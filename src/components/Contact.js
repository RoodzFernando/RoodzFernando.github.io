import{ init, emailjs } from 'emailjs-com';
import React, { useState } from 'react'
init("user_DP6MP9QTuR99lXDoMUXCK");

function Contact() {
    const [userInput, setUserInput] = useState()
    const handleChange = event => {
        const {name, value} = event.target
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        // console.log(userInput)
        // this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                emailjs.sendForm('outlook', 'contact_form', event.target)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
    }
    return (
        <div className="contact-page">
            <p>Contact Me section</p>
            <form id="contact_form" onSubmit={handleSubmit}>
                <div className="name-section inputs">
                    <label htmlFor="name">Name</label>
                    <input onChange={handleChange} type="text" placeholder="Full Name"  id="name" name="name"/>
                </div>

                <div className="email-section inputs">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} type="email" placeholder="Email"  id="email" name="email"/>
                </div>

                <div className="msg-section inputs">
                    <label htmlFor="message">Message</label>
                    <textarea onChange={handleChange} name="message" id="message" cols="30" rows="10" placeholder="Type your message"></textarea>
                </div>
                <button onClick={handleSubmit}>Send</button>
            </form>
        </div>
    )
}

export default Contact
