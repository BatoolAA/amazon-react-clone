import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home_image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product
                        title="amFilm Tempered Glass Screen Protector for Nintendo Switch 2017 (2-Pack)"
                        image="https://images-na.ssl-images-amazon.com/images/I/61mJu3spvUL._SX425_.jpg"
                        price={7.99}
                        rating={4} 
                    />
                     <Product
                        title="Pyle Upgraded Version Portable Washer - Top Loader Portable Laundry, Mini Washing Machine, Quiet Washer, Rotary Controller, 110V - For Compact Laundry, 4.5 Lbs. Capacity, Translucent Tubs"
                        image="https://images-na.ssl-images-amazon.com/images/I/41%2Bq3qldPsL._AC_.jpg"
                        price={83.99}
                        rating={5} 
                    />
                </div>

                <div className="home__row">
                    <Product
                        title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
                        image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SY606_.jpg"
                        price={165.75}
                        rating={5} 
                    />
                     <Product
                        title="Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)"
                        image="https://images-na.ssl-images-amazon.com/images/I/31znGMx%2B9FL._AC_.jpg"
                        price={275.12}
                        rating={5} 
                    />
                     <Product
                        title="Aveeno Baby Daily Bathtime Solutions Gift Set to Nourish Skin for Baby and Mom, 4 items"
                        image="https://images-na.ssl-images-amazon.com/images/I/71T71ZiPXZL._AC_SX425_.jpg"
                        price={17.92}
                        rating={5} 
                    />
                </div>

                <div className="home__row">
                    <Product
                        title="ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray, F512JA-AS34"
                        image="https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SY450_.jpg"
                        price={499.00}
                        rating={5} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
