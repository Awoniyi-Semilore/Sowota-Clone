import React from 'react'
import './Community.css'
import Header from '../../component/Header'
import Footer from '../../component/Footer/Footer'
import trolley from '../../media/trolley.png'

const Community = () => {
  return (
    <div>
      <Header />
      <div className='waitlist'>
        <h1>Waitlist</h1>
        <h3>We are cooking something great that would impact positively the cross-border between Nigeria and China. Be the first to know when the stew is full cooked.</h3>
        
        <div className='trolley-flex'>
          <div className='empty'>
            
          </div>
          <form action="https://formsubmit.co/byu3pcoi@robot.zapier.com" method="POST" className='waitlist-form'>
            <input type="text" name="Full name" placeholder="Enter your Full Name" required ></input>
            <input type="email" name="Email address" placeholder="Enter your Email Address" required></input>
            <input type="number" name="Phone numebr" placeholder="Enter your Phone Number" required></input>
            <button type="submit" className='notify'> Notify me</button>
          </form>
          <div className='trolley'>
            <img src={trolley} alt="" />
          </div>
        </div>

        <h4>You can, however, still purchase RMB, ask for consolidation, procurement, sourcing, or warehousing by reaching out to our amazing operation reps. We have an ongoing discount package for you while we prepare to launch.</h4>
        <h4>Also, engage with us, learn with us, and join 500+ more people like you doing business from China.</h4>
        
        <div className='waitlist-btns'>
          <div className='waitliist-btn1'>
            <a href="https://chat.whatsapp.com/J16x1c8a10OFGeG8HOORRp" className='waitlist-a1'>Join Community</a>
          </div>
          <div className='waitliist-btn2'>
            <a href="https://wa.me/message/YZAHMMU7ALO5J1" className='waitlist-a'>Request Service</a>
          </div>
        </div>
      </div>
      <div style={{marginTop: '-180px'}}>
        <Footer />
      </div>
    </div>
  )
}

export default Community
