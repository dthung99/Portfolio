import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

import './Connect.scss'

const ConnectHidden = () => {
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
                Oops! You found the hidden page!
            </div>
            <div className="connect-label">Feel free to send me a message!</div>
            <br />
            <div className="social_media">
                <a href='https://www.linkedin.com/in/dthung'>
                    <img src="brand_icons/linkedin.png" alt="Icon" className='social_media-item' />
                </a>
                <a href='https://github.com/dthung99'>
                    <img src="brand_icons/github-mark-white.png" alt="Icon" className='social_media-item' />
                </a>
                <a href='https://scholar.google.com/citations?user=J3C7uvEAAAAJ'>
                    <img src="brand_icons/googlescholar-color.svg" alt="Icon" className='social_media-item' />
                </a>
                <a href='https://www.researchgate.net/profile/Hung-Dang-14'>
                    <img src="brand_icons/researchgate-color.svg" alt="Icon" className='social_media-item' />
                </a>
                <a href='https://www.facebook.com/dtHung99/'>
                    <img src="brand_icons/Facebook_Logo_Primary.png" alt="Icon" className='social_media-item' />
                </a>
            </div>
            <div className="connect-email">
                <div href="mailto:dthung.y17@gmail.com" className='email-link'>dthung.y17@gmail.com</div>
                <div href="mailto:the_hung.dang@kcl.ac.uk" className='email-link'>the_hung.dang@kcl.ac.uk</div>
            </div>
            <Link to='/' className="connect-title" style={{ color: 'blue' }}>
                Back to Home!
            </Link>

        </form>
    );
};

export default ConnectHidden;