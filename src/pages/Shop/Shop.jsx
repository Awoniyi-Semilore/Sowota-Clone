import React from 'react'
import Header from '../../component/header'
import shopOverlay from '../../media/overlay-shop.png'
import aCowry from '../../media/1cowry.png'
import nearTrolley from '../../media/near-trolley.png'
import nearTheImgNearTrolley from '../../media/near the imgneartrolley.png'
import trolley from '../../media/trolley.png'
import Footer from '../../component/Footer/Footer'
import './Shop.css'
const Shop = () => {
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
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div></div>
            </div>
            {/* <Footer /> */}
        </div>
  )
}

export default Shop
