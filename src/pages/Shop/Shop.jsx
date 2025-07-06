import React, { useState, useEffect } from 'react';
import Header from '../../component/header'
import shopOverlay from '../../media/overlay-shop.png'
import aCowry from '../../media/1cowry.png'
import nearTrolley from '../../media/near-trolley.png'
import nearTheImgNearTrolley from '../../media/near the imgneartrolley.png'
import trolley from '../../media/trolley.png'
import woman from '../../media/woman.png'
import number1 from '../../media/1.png'
import number2 from '../../media/2.png'
import number3 from '../../media/3.png'
import number4 from '../../media/4.png'
import cowry2 from '../../media/cowry2.png'
import agric from '../../media/agric.jpg'
import shopLady from '../../media/shopLady.png'
import electric from '../../media/electric.jpg'
import electronics from '../../media/electronics.jpg'
import check from '../../media/purplecheck.png'
import mail from '../../media/emailpurple.png'
import call from '../../media/callwhite.png'
import Footer from '../../component/Footer/Footer'
import './Shop.css'
const Shop = () => {
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
          question: "How do i convert Naira to RMB using SÒWÒTA?",
          answer: "Simply chat with us on Whatsapp to get the real-time exchange rate. Once confirmed, send the Naira equivalent to our Nigerian bank account, and we will transfer the RMB to you or your chinese supplier via Alipay or WeChat within minutes."
        },
        {
          question: "Do you offer consolidation services?",
          answer: "Yes, we do. At SÒWÒTA, we can receive multiple packages on your behalf, inspect them, and consolidate them into one shipment to help you save on shipping costs and ensure a smoother delivery process."
        }
        ];
            
    return (
        <div>
            <Header />
            <div className='shop'>
                <div>
                    <img src={shopOverlay} alt="" className='shopoverlay'/>
                    
                    <img src={aCowry} alt="" className='cowry'/>
                    <div className='designs1'>
                        <h1>SÒWOShop</h1>
                        <img src={nearTheImgNearTrolley} alt="" className='imgtrolley1'/>
                        <img src={nearTrolley} alt="" className='imgTrolley' />
                        <img src={trolley} alt="" className='trolley2'/>
                    </div>
                    

                </div>
                <div className='top-text'>
                    <div className='top-h2'>
                        <h2>The online marketplace for every Nigerian importer</h2>
                    </div>
                    <div className='block1'>
                        <h3>Sowoshop is an online marketplace designed to help Nigerian importers get quality products from China without worrying about Minimum Order Quantities (MOQ).</h3>
                        <h3> We understand how MOQs can limit small importers from accessing the products they need. Sowoshop bridges this gap by offering verified products in smaller quantities, backed by SÒWÒTA's trusted inspection, payment, and logistics services</h3>
                    </div>
                </div>
            </div>
            <div className='section2'>
                <div className='section2-img'>
                    <img src={woman} alt="" />
                </div>
                <div className='section2-div'>
                    <h2>How it works</h2>
                    <div className='numbers'>
                        <div className='number'>
                            <img src={number1} alt="" />
                            <div>
                                <h3>Browse Available Products</h3>
                                <p>Explore a selection of verified, high-demand products sourced from trusted Chinese suppliers</p>
                            </div>
                        </div>
                        
                        <div className='number'>
                            <img src={number2} alt="" />
                            <div>
                                <h3>Order in Small Quantities</h3>
                                <p>Buy the product quantity you need with no MOQ restriction</p>
                            </div>
                        </div>

                        <div className='number'>
                            <img src={number3} alt="" />
                            <div>
                                <h3>We handle the rest</h3>
                                <p>SÒWÒTA manages payment, inspection, and logistics, ensuring your product arrives safely in Nigeria.</p>
                            </div>
                        </div>

                        <div className='number'>
                            <img src={number4} alt="" />
                            <div>
                                <h3>Reach out to SÒWÒTA</h3>
                                <p>Need a specific product? Reach out, and we’ll help you source and verify it</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='shopsection3'>
                <h1>Why Choose Us?</h1>
                <div className='shopcards'>
                    <div className='cardLeft'>
                        <div className='cardTop'>
                            <div className='cardTop1'>
                                <div className='text3'>
                                    <h3>No MOQ Restrictions</h3>
                                    <h2>Buy products in quantities that suit your business needs</h2>
                                </div>
                            </div>
                            <div className='cardTop2'>
                                <div className='text4'>
                                    <h3>Verified Quality</h3>
                                    <h2>Every product is sourced from trusted suppliers and verified for authenticity</h2>
                                </div>
                            </div>
                        </div>
                        <div className='cardBottom'>
                            <img src={nearTheImgNearTrolley} alt="" />
                            <div className='texts'>
                                <h3>Save Time & Money</h3>
                                <h2>Avoid supplier hassles, payment risks, and logistics headaches</h2>
                            </div>
                        </div>
                    </div>
                    <div className='cardRight'>
                        <img src={cowry2} alt="cowry" />
                        <div className='text1'>
                            <h3>End-to-end service</h3>
                            <h2>SÒWÒTA handles payments, inspections, and logistics.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='shopsection4'>
                <div className='shopsection4-top'>
                    <h1>Available Products</h1>
                    <p>These products are available in smaller quantities to help you meet your local demand</p>

                    <div className='images'>
                        <div className='image1'>
                            <img src={agric} alt="agric" />
                            <h4>AGRICULTURAL EQUIPMENTS</h4>
                            <h5>Like mulch films, irrigation tools, etc.</h5>
                        </div>
                        <div className='image2'>
                            <img src={electric} alt="" />
                            <h4>ELECTRICAL EQUIPMENTS</h4>
                            <h5>Like Solar panels, industry machines, etc.</h5>
                        </div>
                        <div className='image3'>
                            <img src={electronics} alt="" />
                            <h4>ELECTRONICS</h4>
                            <h5>Like mobile devices (Iphones, Samsung, Huawei) Kitchen wares,  etc.</h5>
                        </div>
                    </div>

                    <div className='aaa'>
                        <h2>Can't find the product you need?</h2>
                        <div className='aa'>
                            <a href="https://wa.me/message/YZAHMMU7ALO5J1">Request custom sourcing</a>
                        </div>
                    </div>
                </div>
                <div className='shopsection4-bottom'>
                    <div className='ladyshop'>
                        <img src={shopLady} alt="A blissful lady shopping" />
                    </div>
                    <div className='leftHS'>
                        <h1>How to buy</h1>

                        <div className='checkss'>
                            <div className='check'>
                                <img src={check} alt="" />
                                <p>Contact us via WhatsApp or Call for available stock details</p>
                            </div>
                            <div className='check'>
                                <img src={check} alt="" />
                                <p>Place Your Order for the quantity you need</p>
                            </div>
                            <div className='check'>
                                <img src={check} alt="" />
                                <p>We Process and Deliver – from supplier verification to doorstep delivery</p>
                            </div>
                        </div>

                        <div className='closing'>
                            <div className='mail'>
                                <a href="sowotahq@gmail.com">
                                    <div className='maill'>
                                        <img src={mail} alt="" />
                                        Send a mail
                                    </div>
                                </a>
                            </div>
                            <div className='cal'>
                                <a href="https://wa.me/message/YZAHMMU7ALO5J1">
                                    <div className='call'>
                                        <img src={call} alt="" />
                                        Call us
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='shop-faq'>
            <div>
                <h1>FAQ</h1>
            </div>
            <div className='shop-faq-accordion'>
                {accordionData.map((item, index) => (
                <div className='shop-faq-item' key={index}>
                    <div className='shop-faq-question' onClick={() => toggle(index)}>
                    <p>{item.question}</p>
                    <span className='shop-faq-icon'>{activeIndex === index ? "↓" : "→"}</span>
                    </div>
                    <div className={activeIndex === index ? "shop-faq-answer visible" : "shop-faq-answer hidden"}>
                    <h6>{item.answer}</h6>
                    </div>
                </div>
                ))}
            </div>
            </div>

            
            
            <Footer />
        </div>
  )
}

export default Shop
