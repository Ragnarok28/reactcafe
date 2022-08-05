import './contact.css';
import React from 'react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/navbar';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
    
        emailjs.sendForm('service_v9o9h3g', 'template_yb8ag4b', form.current, '9zlivvMochxUHYyRM')
          .then((result) => {
              console.log(result.text);
              window.location.reload(false);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset();
      };

    const [formData, setFormData] = useState ({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.id] : e.target.value
        }));
    
    };

    return (
        <section className="contact" id='contact'>
        <Navbar />
        <h1 className="heading text-yellow"><span className='text-white' id='span'>Contact</span> Us</h1>
        <div className="row">
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25227.36412598093!2d-122.49669870070875!3d37.780183723665175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085871100d5c12b%3A0xd19b4afb640db93d!2zUmljaG1vbmQgRGlzdHJpY3QsINCh0LDQvSDQpNGA0LDQvdGG0LjRgdC60L4sINCa0LDQu9C40YTQvtGA0L3QuNGY0LAsINCh0ZjQtdC00LjRmtC10L3QtSDQlNGA0LbQsNCy0LU!5e0!3m2!1ssr!2srs!4v1659304723159!5m2!1ssr!2srs" 
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <form className='contact-form mx-auto' onSubmit={sendEmail} ref={form}>
            <div className="input-box">
                <span className='fas fa-user'></span>
                <input type="text" name="name" value={formData.name}
                    className = "form-control" placeholder="Name" onChange={handleChange}
                    id = "name" required/>
            </div>
            <div className="input-box">
                <span className='fas fa-envelope'></span>
                <input type="email" name="email" value={formData.email}
                    className = "form-control" placeholder="Email" onChange={handleChange}
                    id = "email" required/>
            </div>
            <div className="input-box">
                <textarea name="message" placeholder='message' value={formData.message} onChange={handleChange} className="form-control" rows="3" id='message' required/>
            </div>
            <div className="input-box">
            <input type="submit" value="Send" className='btn'/>
            </div>
        </form>
        </div>
        </section>
        );
    }

    export default Contact;