import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

import { GitHubIcon, GoogleScholarIcon } from '../assets/icon/icons.jsx';

import './Connect.scss'

const Connect = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_4h5p3s5', 'template_lnwhwiq', form.current, {
                publicKey: 'U_Th0NBtgIpfKATax',
            })
            .then(
                () => {
                    alert('Email sent!');
                },
                (error) => {
                    alert('Email is not sent :((. Something happened!');
                },
            );
    };

    return (
        <form ref={form} className='connect-main-layout' onSubmit={sendEmail}>
            <div className="connect-title">
                Feel free to drop me an email or connect with me via social media!
            </div>
            <div className="social_media">
                <a href='https://www.linkedin.com/in/dthung'>
                    <img src="linkedin.png" alt="Icon" className='social_media-item' />
                </a>
                <a href='https://github.com/dthung99'>
                    <img src="github-mark-white.png" alt="Icon" className='social_media-item' />
                </a>
                <a href='https://scholar.google.com/citations?user=J3C7uvEAAAAJ'>
                    <img src="googlescholar-color.svg" alt="Icon" className='social_media-item' />
                </a>
                <a href='https://www.researchgate.net/profile/Hung-Dang-14'>
                    <img src="researchgate-color.svg" alt="Icon" className='social_media-item' />
                </a>
            </div>
            <div className="connect-email">
                Email: &nbsp;
                <a href="mailto:dthung.y17@gmail.com" className='email-link'>dthung.y17@gmail.com</a> &nbsp; | &nbsp;
                <a href="mailto:the_hung.dang@kcl.ac.uk" className='email-link'>the_hung.dang@kcl.ac.uk</a>
            </div>

            <div className="connect-label">Name</div>
            <input className="connect-input-box" type="text" name="user_name" placeholder="Your name" />

            <div className="connect-label">Email</div>
            <input className="connect-input-box" type="email" name="user_email" placeholder="Your email" />

            <div className="connect-label">Message</div>
            <textarea className="connect-input-box" rows={10} name="message" placeholder="Your message" />

            <input type="submit" value="Send Message" className="submit-button" />
        </form>
    );
};

export default Connect;