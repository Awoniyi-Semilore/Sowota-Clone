import React, {useEffect} from 'react'
import './Design.css'
import imgLeft from "../../media/card-img-left.png"
import imgRight from "../../media/card-img-right.png"
import topLeft from "../../media/card-top-left.png"
import topRight from "../../media/card-top-center.png"
import checkPoint from "../../media/checkpoint.png"


const Design = () => {

    useEffect(() => {
        const elements = document.querySelectorAll('.pop-up, .pop-up1, .pop-up2, .pop-up3, .pop-up4');
        
// pop-up-- from bottom, pop-up1-- from top, pop-up2-- from right, pop-up3-- from left, pop-up4-- from bottom + slower effect,
    
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              } else {
              entry.target.classList.remove('visible');
              }
            });
          },
          { threshold: 0.1 }
        );
    
        elements.forEach(el => observer.observe(el));
    
        // Cleanup observer on component unmount
        return () => {
          elements.forEach(el => observer.unobserve(el));
        };
      }, []);  // empty deps => run once on mount



  return (
    <div className='design-flex pop-up'>
            <img src={imgLeft} alt="" className='left-side'/>
            <div className='design'>
                <div className='top-designs'>
                    <img src={topLeft} alt=""  className='top-design1'/>
                    <img src={topRight} alt="" className='top-design2'/>
                </div>
                <div className='bottom-design pop-up1'>
                    <div className='text-design'>
                        <h1>Why SÒWÒTA?</h1>
                        <h1>Because We Get it!</h1>
                        <p>More Than Just a Platform - <br /> We're Your Business Partner</p>
                    </div>
                    <div>
                        <div className="checkpoint-item" >
                            <img src={checkPoint} alt="" style={{height: '16px', }}/>
                            <h3>All-in-one Import Solution</h3>
                        </div>
                        <div className="checkpoint-item">
                            <img src={checkPoint} alt="" style={{height: '16px'}} />
                            <h3>No Hidden Charges, No Surprises</h3>
                        </div>
                        <div className="checkpoint-item">
                            <img src={checkPoint} alt="" style={{height: '16px'}}/>
                            <h3>Verified Supplier Network</h3>
                        </div>
                        <div className="checkpoint-item">
                            <img src={checkPoint} alt="" style={{height: '16px'}}/>
                            <h3>Dedicated Support, Real People</h3>
                        </div>
                    </div>
                </div>
            </div> 
            <img src={imgRight} alt="" className='right-side'/>
    </div>
  )
}

export default Design
