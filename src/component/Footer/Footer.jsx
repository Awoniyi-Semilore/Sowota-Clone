import React, { useState } from 'react'
import './Footer.css'
import logo2 from '../../media/logo2.png'
import mail from '../../media/mail2.png'
import location from '../../media/contact.png'
import call from '../../media/call.png'

const Footer = () => {
    // const [facebook, setFacebook] = useState(FacebookBefore)
    // const img1 =() => {
    //     setFacebook('facebookAfter')
    // }

    const [text, setText] = useState("Subscribe")
    const texts = () => {
        setText("Join Us")
    }

    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-left'>
                    <img src={logo2} alt="" className='logo2'/>
                    <div className='flexs'>
                        <img src={mail} alt="" />
                        <a href="mailto:sowotahq@gmail.com">sowotahq@gmail.com</a>
                    </div>
                    <div className='flexs'> 
                        <img src={location} alt="" />
                        <p>Block 14. Plot 12, Ikota Lekki county home road, Lagos State</p>
                    </div>
                    <div className='flexs'> 
                        <img src={call} alt="" />
                        <a href="tel:+2349078339649">+2349078339649</a>
                    </div>
                    <div className='flexs'> 
                        <img src={call} alt="" />
                        <a href="tel:+2347025411623">+2347025411623</a>
                    </div>
                    <div className='flexs'> 
                        <img src={call} alt="" />
                        <a href="tel:+8619511244593">+8619511244593</a>
                    </div>
                    
                    <form action="https://formsubmit.co/byu3pcoi@robot.zapier.com" method="POST" >
                        <div >
                            <input type="email"  placeholder="Sign up for our newsletter" className='form-action' required></input>
                            <button className="subscribe" onMouseEnter={texts}>{text}</button>  {/* This is not working */}
                        </div>

                    </form>

                </div>
                <div className='footerss'>
                    <div className='footer-right'>
                        <a href="https://www.sowota.co/">Home</a>
                        <a href="https://www.sowota.co/waitlist">About Us</a>
                        <a href="https://www.sowota.co/waitlist">Join Community</a>
                        <a href="https://www.sowota.co/waitlist">FAQs</a>
                        <a href="https://www.sowota.co/waitlist">Help Center</a>
                        <a href="https://www.sowota.co/waitlist">Event</a>
                        <a href="https://www.sowota.co/waitlistt">Contact Us</a>
                    </div>
                    <div className='footer-right fn'>
                        <a href="https://www.sowota.co/waitlist">Shipping</a>
                        <a href="https://www.sowota.co/shop">SOWO Shop</a>
                        <a href="https://www.sowota.co/blog">Blogs</a>
                        <a href="https://www.sowota.co/pp">Privacy Policy</a>
                        <a href="https://www.sowota.co/waitlist">Event</a>
                        <a href="https://www.sowota.co/tou">Terms of Use</a>
                    </div>
                </div>
            </div>

            <div className='gradient-overlsay'></div>

            <div className='overlayy'>
                {/* <div >
                    <img src={facebook} alt="" />
                </div> */}

                <div className='footer-bottom'>
                    <div>
                        <a href="https://www.sowota.co/">Sowota 2025.</a>
                    </div>
                    <div className='footer-bottom-right'>
                        <a href="https://www.sowota.co/tou">Terms of Use</a>
                        <p> . </p>
                        <a href="https://www.sowota.co/pp">Privacy Policy</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
