import React from 'react'
import './Section5.css'
import profileTop1 from "../../media/profile-top-1.png"
import profileTop2 from "../../media/profile-top-2.png"
import profileTop3 from "../../media/profile-top-3.png"
import profileBottom1 from "../../media/profile-bottom-1.png"
import profileBottom2 from "../../media/profile-bottom-2.png"
import profileCenter1 from "../../media/profile-center-1.png"
import profileCenter2 from "../../media/profile-center-2.png"


const Section5 = () => {
  return (
    <div className='section5'>
        <div className='profileImgs'>
            <div className='profileTop'>
                <img src={profileTop1} alt="" />
                <img src={profileTop2} alt="" />
                <img src={profileTop3} alt=""  className='none'/>
            </div>

            <div className='profileCenter'>
                <img src={profileCenter1} alt="" />
                <img src={profileCenter2} alt="" />
            </div>

            <div className='profileBottom'>
                <img src={profileBottom1} alt="" />
                <img src={profileBottom2} alt="" />
            </div>
        </div>
        <div className='center1'>
            <h1>Trusted by 1000+ Importers</h1>
            <p>Join the movement today!</p>
            <div className='center1-a-div'>
                <a href="https://chat.whatsapp.com/J16x1c8a10OFGeG8HOORRp">
                   <div className='center1-a'>Start your importation journey now</div>
                </a>
            </div>

        </div> 
    </div>
  )
}

export default Section5
