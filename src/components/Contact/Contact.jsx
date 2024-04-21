import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div className="main_container">
            <div className="main_container_left">
                <h1 id="h1First">Contact us</h1>
                <h1 id="h1Second">Tell us about your projects</h1>
            </div>
            <div className="main_container_right">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Your Email" />
                <textarea
                    name=""
                    id=""
                    cols={20}
                    rows={10}
                    placeholder="Your Message..."
                    defaultValue={""}
                />
                <button>SEND ME</button>
            </div>
        </div>

    )
}
