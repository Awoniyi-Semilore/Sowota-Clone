import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Header from '../component/header'
import Typed  from 'react-typed'

const Home = () => {

const cardData = [
  {
    id: 1,
    img: './src/media/card-img-1.png',
    title: 'Swift and Secure Transactions',
    backgroundColor: "card1",
    text: 'Say goodbye to complicated transfers and hidden fees! We offer real-time RMB payments at the best rates, ensuring your transactions are fast, safe, and hassle-free.'
  },
  {
    id: 2,
    img: './src/media/card-img-2.png',
    title: 'Secure RMB Payments',
    backgroundColor: "card2",
    text: 'Effortlessly fund your Alipay or WeChat account using Naira. We ensure fast, secure, and hassle-free transactions.'
  },
  {
    id: 3,
    img: './src/media/card-img-3.png',
    title: 'Procurement & Product Sourcing',
    backgroundColor: "card3",
    text: 'We help you find and procure the best products from legit and verified factories. Our factory inspection service ensures that you are dealing with authentic suppliers, reducing risks and ensuring smooth transactions.'
  },
  {
    id: 4,
    img: './src/media/card-img-4.png',
    title: 'Shipping & Consolidations',
    backgroundColor: "card4",
    text: 'We handle the logistics from China to Nigeria, ensuring your goods are safely consolidated and shipped to your destination.'
  },
  {
    id: 5,
    img: './src/media/card-img-5.png',
    title: 'Negotiation Services',
    backgroundColor: "card5",
    text: 'Our team negotiates directly with Chinese factories in their local language, securing the best deals for you at unbeatable prices.'
  },
  {
    id: 6,
    img: './src/media/card-img-6.png',
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

  const strings = ['Import wahala', 'Trade wahala', 'RMB Wahala', 'China Wahala', 'Ecom Wahala' ];
  const colors = ['#007F04','#AA1C4D','#994A12','#6333FB','BF3BD6'];

  const [colorIndex, setColorIndex] = useState(0);

  return (
    <div>
      <Header />
      <section className='section1-down'>

          
        <div className='section1'>
          <div  className='section1-left'>
            <div className='flex'>
              <h2>No More</h2>
              <div>
                <Typed
                  strings={strings}
                  typeSpeed={50}
                  backSpeed={40}
                  loop
                  onStringTyped={(arrayPos) => setColorIndex(arrayPos)}
                  style={{ color: colors[colorIndex], fontWeight: 'bold', fontSize: '24px' }}
                />
              </div>
            </div>
            <p>We handle the tricky parts of E-commerce so you can focus on growing your business</p>
            <div className='section1-img'>
              <img src="./src/media/body-img1.png" alt="" />
              <p>Fast & secured NAIRA-RMB Exchange</p>
            </div>
            <div className='section1-img'>
              <img src="./src/media/bodyimg2.png" alt="" />
              <p>Sourcing & Procurement done right</p>
            </div>
            <div className='section1-img'>
              <img src="./src/media/body-img3.png" alt="" />
              <p>Verified suppliers</p>
            </div>
            <div className='section1-img'>
              <img src="./src/media/body-img4.png" alt="" />
              <p>Stress-free logistics</p>
            </div>
            <div className='section1-btn-flex'>
              <a href="https://www.sowota.co/waitlist" className='section1-btn1'>Get Started</a>
              <button className='section1-btn2'>
                <img src="./src/media/bosy-btn-img-what.png" alt=""/>
                <h6>What we do</h6>
              </button>
            </div>
          </div>
          <div >
            <img src="./src/media/section1-img.svg" alt=""className='section1-img2' />
          </div>
        </div>

        <div>
          <img src="./src/media/down-img2.png" alt=""  className='down-img'/>
        </div>
      </section>
      
      <section>
        <div className='card-section'>
          <p className='sowota'>Sowota Services, Built for importers like you</p>
          <h2 className='why'>Why Sowota? Because We Get It!</h2>
          <p className='more'>More ThanJust a Platform - We are Your Buisness Partner</p>

          <div className="slider-container">
          <button className="nav-button left" onClick={prevCard}>‹</button>

          <div className="cards-wrapper"> 
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

          <button className="nav-button right" onClick={nextCard}>›</button>
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
          <img src="./src/media/test.png" alt="" />
          <div className='section3-right'>
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
      
      <section className='section4'>
        <h4>Real traders, real success stories</h4>
        <h1>Wall of Love.</h1>
        <h2>What others like you are saying.</h2>

        <div  className='section4-cards'>
          <div className='section4-card'> 
            <img src="./src/media/person-svg.png" alt="" />
            <h6>Adun</h6>
            <p>SÒWÒTA made it so easy for me to pay my Chinese suppliers. Fast transactions, great rates, and I didn’t have to stress at all. Highly recommend</p>
          </div>
          <div className='section4-card'>
            <img src="./src/media/person-svg.png" alt="" />
            <h6>Joy</h6>
            <p>My goods arrived in Lagos faster than I expected. Clear communication from start to finish. No hidden charges, no wahala. Thank you, SÒWÒTA!</p>
          </div>
          <div className='section4-card'>
            <img src="./src/media/person-svg.png" alt="" />
            <h6>xAnita</h6>
            <p>I bought both sensitive goods (like battery-powered items and liquid chemicals such as face masks) and regular goods, all sent to SÒWÒTA for air shipping. They shipped my sensitive goods separately through Hong Kong and the non-sensitive goods through Guangzhou, helping me save significantly on costs compared to other shipping companies.</p>
          </div>
          <div className='section4-card'>
            <img src="./src/media/person-svg.png" alt="" />
            <h6>Boluwatife</h6>
            <p>Funding my Alipay to pay my Chinese suppliers has never been this fast, easy, and safe. Thank you sowota.</p>
          </div>
          <div className='section4-card'>
            <img src="./src/media/person-svg.png" alt="" />
            <h6>Bola</h6>
            <p>Thank you so much! You don’t know how much I’ve struggled to find a reliable supplier for my products. May God bless you richly!</p>
          </div>

        </div>

        <h5>See more success stories</h5>
      </section>

    </div>
  )
}

export default Home
