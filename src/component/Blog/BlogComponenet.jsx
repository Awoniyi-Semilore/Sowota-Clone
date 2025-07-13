import React, {useEffect} from 'react'
import './Blog.css'
import cardImg1 from "../../media/card-img1.png"
import cardImg2 from "../../media/card-img2.png"
import cardImg3 from "../../media/card-img3.png"

const Blog = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.pop-up, .pop-up1, .pop-up2, .pop-up3, .pop-up4, .pop-up5');
        
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
    <div className='blog'>
        <div className='pop-up'>
            <h1>BLOG</h1>
            <h2>The Importer's Playbook</h2>
        </div>
        <div className='blog-cards'>
            <div className='blog-card pop-up1'>
                <a href="https://www.sowota.co/tug">
                    <img src={cardImg1} alt="" />
                    <h2>The ultimate guide to importing from China</h2>
                </a>
                <div className='blog-card-left'>
                    <p>24 March 2025</p>
                    <h6>3 mins read</h6>
                </div>
            </div>

            <div className='blog-card pop-up'>
                <a href="https://www.sowota.co/mni">
                    <img src={cardImg2} alt="" />
                    <h2>5 Mistakes Nigerian Importers make and how to avoid them</h2>
                </a>
                <div className='blog-card-left'>
                    <p>24 March 2025</p>
                    <h6>3 mins read</h6>
                </div>
            </div>

            <div className='blog-card pop-up1'>
                <a href="https://www.sowota.co/fsf">
                    <img src={cardImg3} alt="" />
                    <h2>How to Spot a Fake Supplier in 2 Minutes-</h2>
                </a>
                <div className='blog-card-left'>
                    <p>24 March 2025</p>
                    <h6>3 mins read</h6>
                </div>
            </div>
            
        </div>
        <div className='blog-link'>
            <a href="https://www.sowota.co/fsf" className='blog-a'>Read more tips</a>
        </div>
    </div>
  )
}

export default Blog
