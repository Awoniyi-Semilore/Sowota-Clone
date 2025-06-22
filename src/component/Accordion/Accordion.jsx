// 
import React, { useState, useEffect } from 'react';
import './Accordion.css';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if clicked again
    } else {
      setActiveIndex(index); // Open the clicked one
    }
  };

  const accordionData = [
    {
      question: "What is SÒWÒTA?",
      answer: "SÒWÒTA is a trade facilitation platform that helps Nigerian businesses securely make RMB payments, source products, verify suppliers, and handle shipping from China to Nigeria."
    },
    {
      question: "Do you offer sea and air shipping services?",
      answer: "Yes, with our reliable logistics partners, we offer both air and sea shipping from China to Nigeria."
    },
    {
      question: "How long does it take to receive my goods in Nigeria?",
      answer: "Air shipping usually takes 7-10 working days, while sea shipping can take 4-6 weeks, depending on logistics flow and clearance."
    },
    {
      question: "Do you offer product sourcing services?",
      answer: "Yes, we help clients find trusted suppliers for specific products in China, verified factories, and negotiate prices to ensure quality and cost-efficiency."
    }
  ];



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
    <div className='section5'>
      <div className='pop-up'>
        <h1>We know you have questions.</h1>
        <h2>So we answered them below!</h2>
      </div>
      <div className='section5-accordions pop-up4'>
        {accordionData.map((item, index) => (
          <div className='accordion' key={index}>
            <div className='section5-accordion' onClick={() => toggle(index)}>
              <p>{item.question}</p>
              <span className='icon'>{activeIndex === index ? "↓" : "→"}</span>
            </div>
            <div className={activeIndex === index ? "block" : "hidden"}>
              <h6>{item.answer}</h6>
            </div>
          </div>
        ))}
      </div>
      <div className='accordion-bottom'>
        <h1>Still got questions?</h1>
        <div className='accordion-bottom-a'>
          <a href="https://wa.me/message/YZAHMMU7ALO5J1" >chat with us now</a>
        </div>
        
      </div>
    </div>
  );
};

export default Accordion;
