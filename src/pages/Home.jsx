import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../component/Header'
import '../component/Section4.css'
import Accordion from '../component/Accordion/Accordion';
import Blog from '../component/Blog/BlogComponenet';
import Design from '../component/Design/Design';
import Section5 from '../component/Section5/Section5';
import Footer from '../component/Footer/Footer';
import bodyImg1 from '../media/body-img1.png'
import bodyImg2 from '../media/bodyimg2.png'
import bodyImg3 from '../media/body-img3.png'
import bodyImg4 from '../media/body-img4.png'
import bosy from '../media/bosy-btn-img-what.png'
import section1Img from '../media/section1-img.svg'
import downImg2 from '../media/down-img2.png'
import cardImg from '../media/card-img-1.png'
import cardImg2 from '../media/card-img-2.png'
import cardImg3 from '../media/card-img-3.png'
import cardImg4 from '../media/card-img-4.png'
import cardImg5 from '../media/card-img-5.png'
import cardImg6 from '../media/card-img-6.png'
import overlay from '../media/overlay-shop.png'
import personSvg from '../media/person-svg.png'

const Home = () => {

const cardData = [
  {
    id: 1,
    img: cardImg,
    title: 'Swift and Secure Transactions',
    backgroundColor: "card1",
    text: 'Say goodbye to complicated transfers and hidden fees! We offer real-time RMB payments at the best rates, ensuring your transactions are fast, safe, and hassle-free.'
  },
  {
    id: 2,
    img: cardImg2,
    title: 'Secure RMB Payments',
    backgroundColor: "card2",
    text: 'Effortlessly fund your Alipay or WeChat account using Naira. We ensure fast, secure, and hassle-free transactions.'
  },
  {
    id: 3,
    img: cardImg3,
    title: 'Procurement & Product Sourcing',
    backgroundColor: "card3",
    text: 'We help you find and procure the best products from legit and verified factories. Our factory inspection service ensures that you are dealing with authentic suppliers, reducing risks and ensuring smooth transactions.'
  },
  {
    id: 4,
    img: cardImg4,
    title: 'Shipping & Consolidations',
    backgroundColor: "card4",
    text: 'We handle the logistics from China to Nigeria, ensuring your goods are safely consolidated and shipped to your destination.'
  },
  {
    id: 5,
    img: cardImg5,
    title: 'Negotiation Services',
    backgroundColor: "card5",
    text: 'Our team negotiates directly with Chinese factories in their local language, securing the best deals for you at unbeatable prices.'
  },
  {
    id: 6,
    img: cardImg6,
    title: 'SÒWOShop',
    backgroundColor: "card6",
    text: 'Verified Factory Products. Buy high-quality products from trusted and verified factories listed on our platform, ensuring authenticity and reliability.'
  }
];

const [current, setCurrent] = useState(0);

  const nextCard = () => {
    if (current < cardData.length - 1) {
      setCurrent(prev => prev + 1);
    }
  };

  const prevCard = () => {
    if (current > 0) {
      setCurrent(prev => prev - 1);
    }
  };

  const strings = ['Import Wahala', 'Trade Wahala', 'RMB Wahala', 'China Wahala', 'Ecom Wahala' ];
  const colors = ['#007F04','#AA1C4D','#994A12','#6333FB','#BF3BD6'];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex <= strings[stringIndex].length) {
      // Typing
      timeout = setTimeout(() => {
        setText(strings[stringIndex].substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      // Deleting
      timeout = setTimeout(() => {
        setText(strings[stringIndex].substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex > strings[stringIndex].length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex < 0) {
      // Move to next string & color
      setIsDeleting(false);
      setStringIndex((stringIndex + 1) % strings.length);
      setColorIndex((colorIndex + 1) % colors.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, stringIndex, strings, colorIndex, colors]);


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
    <div>
      <Header />
      <section className='section1-down'>
  
        <div className='section1'>
          <div  className='section1-left'>
            <div className='flex'>
              <h2>No More</h2>
              <div className='typingText' style={{
                color: colors[colorIndex],
              }} >
                {text}
                <span className="cursor">|</span>
                <style>{`
                  .cursor {
                    display: inline-block;
                    animation: blink 1s infinite;
                    color: black;
                    height: 24px;
                    margin-left: 2px;
                    width: 2px;
                    animation: 0.7s steps(2) 0s infinite normal none running blink;
                  }
                  @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                  }
                `}</style>
              </div>
            </div>
            <p>We handle the tricky parts of E-commerce so you can focus on growing your business</p>
            <div className='section1-img'>
              <img src={bodyImg1} alt="" />
              <p>Fast & secured NAIRA-RMB Exchange</p>
            </div>
            <div className='section1-img'>
              <img src={bodyImg2} alt="" />
              <p>Sourcing & Procurement done right</p>
            </div>
            <div className='section1-img'>
              <img src={bodyImg3} alt="" />
              <p>Verified suppliers</p>
            </div>
            <div className='section1-img'>
              <img src={bodyImg4} alt="" />
              <p>Stress-free logistics</p>
            </div>
            <div className='section1-btn-flex'>
              <a href="https://www.sowota.co/waitlist" className='section1-btn1'>Get Started</a>
              <button className='section1-btn2'>
                <img src={bosy} alt=""/>
                <h6>What we do</h6>
              </button>
            </div>
          </div>
          <div >
            <img src={section1Img} alt="" className='section1-img2' />
          </div>
        </div>

        <div>
          <img src={downImg2} alt=""  className='down-img'/>
        </div>
      </section>
      
      <section >
        <div className='card-section'>
          <div className='pop-up1'>
            <p className='sowota'>Sowota Services, Built for importers like you</p>
            <h2 className='why'>Why Sowota? Because We Get It!</h2>
            <p className='more'>More Than Just a Platform - We are Your Business Partner</p>
          </div>

          <div className="slider-container">
            <button aria-label='Previous Card' className="nav-button left" onClick={prevCard}>‹</button>

            <div className="cards-wrapper pop-up" > 
              <div className="cards-slider">
                <div
                  className="cards-track"
                  style={{
                    transform: `translateX(-${current * (66.66 + 1.5)}%)`
                  }}
                >
                  {cardData.map((card) => (
                    <div key={card.id} className={`card ${card.backgroundColor}`}>
                      <img src={card.img} alt={card.title} className='cards-img' />
                      <div>
                        <h2 className='cards-h1'>{card.title}</h2>
                        <p className='cards-p'>{card.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>

          <button aria-label='Next Card' className="nav-button right" onClick={nextCard}>›</button>
        </div>
{/* 
          <div className='cards'> 

             <div className='card1'>
              <img src="./src/media/card-img-1.png" alt="" />
              <div>
                <h2>Swift and Secure Transactions</h2>
                <p>Say goodbye to complicated transfers and hidden fees! We offer real-time RMB payments at the best rates, ensuring your transactions are fast, safe, and hassle-free.</p>
              </div>
            </div>

            <div className='card2'>
              <img src="./src/media/card-img-2.png" alt="" />
              <div>
                <h2>Secure RMB Payments</h2>
                <h6>Effortlessly fund your Alipay or WeChat account using Naira. We ensure fast, secure, and hassle-free transactions</h6>
              </div>
            </div>

            <div className='card3'>
              <img src="./src/media/card-img-3.png" alt="" />
              <div>
                <h2>Procurement & Product Sourcing</h2>
                <p>We help you find and procure the best products from legit and verified factories. Our factory inspection service ensures that you are dealing with authentic suppliers, reducing risks and ensuring smooth transactions.</p>
              </div>
            </div>

            <div className='card4'>
              <img src="./src/media/card-img-4.png" alt="" />
              <div>
                <h2>Shipping & Consolidations</h2>
                <p>We handle the logistics from China to Nigeria, ensuring your goods are safely consolidated and shipped to your destination</p>
              </div>
            </div>
            
            <div className='card5'>
              <img src="./src/media/card-img-5.png" alt="" />
              <div>
                <h2>Negotiation Services</h2>
                <p>Our team negotiates directly with Chinese factories in their local language, securing the best deals for you at unbeatable prices. Our factory inspection service ensures that you are dealing with authentic suppliers, reducing risks and ensuring smooth transactions.</p>
              </div>
            </div>

            <div className='card6'>
              <img src="./src/media/card-img-6.png" alt="" />
              <div>
                <h2>SÒWOShop</h2>
                <p>Verified Factory Products <br />Buy high-quality products from trusted and verified factories listed on our platform, ensuring authenticity and reliability</p>
              </div>
            </div>

          </div>  */}
          {/* btn to c,ick to move sideways in this package */}

        </div>

        <div className='stats'> 

          <div className='stats1'>
            <h2>300+</h2>
            <p>Trusted by over 300 businesses to manage their China import trade from RMB exchange to procurement, to sourcing, to shipping.</p>
          </div>
          
          <div className='stats2'>
            <h2>₦500M</h2>
            <p>Over 500 million worth of transactions in first few months of launching.</p>
          </div>

          <div className='stats3'>
            <h2>89%</h2>
            <p>Faster time to exchange RMB, procure, source, and ship to Nigeria compared to conpetitors.</p>
          </div>

          <div className='stats4'>
            <h2>$100k</h2>
            <p>Cost saving by Sowota, helping businesses and individuals from purchasing inferor or falling into scams while buying from China.</p>
          </div>

        </div>
      </section>

      <section className='section3'>
          <div className='pop-up2'>
            <img src="./src/media/test.png" alt="" />
          </div>
          <div className='section3-right pop-up3'>
            <h2> A Thriving Importers Community</h2>
            <h5>We are more than a service we are a movement</h5>
            <ul >
              <li>
                <p>Join thousands of Nigerian importers in our exclusive Sowota Community to network, learn, and scale faster.</p>
              </li>
              <li>
                <p>Get exclusive access to industry insights, import/export masterclasses, and networking opportunities with top traders.</p>
              </li>
              <li style={{marginBottom: '20px'}}>
                <p>You can also ask Experts for Advice and get direct answers from our China-based team</p>
              </li>
            </ul>
            <a href="https://chat.whatsapp.com/J16x1c8a10OFGeG8HOORRp" className='section3-a'>Join our Community</a>
          </div>
      </section>
      
      <section className='section4 pop-up4'>
        <div className="background-block">
          <img src={overlay} alt="" className="decor-overlay"/>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column'}}>
            <h4>Real traders, real success stories</h4>
            <h1>Wall of Love.</h1>
            <h2>What others like you are saying.</h2>
          </div>

          <div className='section4-wrapper'>
            <div className='card-width'>
              <div className='section4-cards'>
                <div className='section4-card'> 
                  <img src="./src/media/person-svg.png" alt="" />
                  <h6>Adun</h6>
                  <p>SÒWÒTA made it so easy for me to pay my Chinese suppliers. Fast transactions, great rates, and I didn’t have to stress at all. Highly recommend</p>
                </div>
                <div className='section4-card'>
                  <img src={personSvg} alt="" />
                  <h6>Joy</h6>
                  <p>My goods arrived in Lagos faster than I expected. Clear communication from start to finish. No hidden charges, no wahala. Thank you, SÒWÒTA!</p>
                </div>
                <div className='section4-card'>
                  <img src={personSvg} alt="" />
                  <h6>Boluwatife</h6>
                  <p>Funding my Alipay to pay my Chinese suppliers has never been this fast, easy, and safe. Thank you sowota.</p>
                </div>
                <div className='section4-card'>
                  <img src={personSvg} alt="" />
                  <h6>Bola</h6>
                  <p>Thank you so much! You don’t know how much I’ve struggled to find a reliable supplier for my products. May God bless you richly!</p>
                </div>
              </div> 
            </div>
          </div>

          <h5>See more success stories</h5>
        </div>
      </section>

      <Accordion/>
      <Blog/>
      <Design/>
      <Section5/>
      <Footer/> 

    </div>
  )
}

export default Home
