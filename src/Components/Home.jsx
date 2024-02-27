import React from 'react'
import Product from './Product'

function Home() {
    return (
        <>
            <div className='max-w-screen-xl mx-auto'>
                <img src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                    className='w-full gradient-mask-b-[rgba(0,0,0,1.0),rgba(0,0,0,0.5)] -z-1 -mb-150' alt='banner' />
            </div>

            <div className='flex z-1 mx-1.5'>
                <Product
                    id="1"
                    title="Samsung Galaxy M21 (Raven Black, 6GB RAM, 128GB Storage)"
                    price={15999}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71QLvGIAq5L._SL1500_.jpg"
                />
                <Product
                    id="2"
                    title="Samsung Galaxy M21 (Raven Black, 6GB RAM, 128GB Storage)"
                    price={15999}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/AugArt20/V231718520_IN_CEPC_AugArt20_GW-graphics_July2_dbcc_1x._SY304_CB408883794_.jpg"
                />
                <Product
                    id="3"
                    title="Samsung Galaxy M21 (Raven Black, 6GB RAM, 128GB Storage)"
                    price={15999}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41wZNl8llFL.__AC_SY200_.jpg"
                />
            </div>

            <div className='flex z-1 mx-1.5'>
                <Product
                    id="4"
                    title="boAt Rockerz 510 Bluetooth Headphone with Thumping Bass, Up to 10H Playtime, Dual Connectivity Modes, Easy Access Controls and Ergonomic Design (Jazzy Blue)"
                    price={1899}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61OU6uUy1SL._AC_UY218_.jpg"
                />
                <Product
                    id="5"
                    title="HP Pavilion Gaming 9th Gen Intel Core i7 Processor 15.6 inch FHD Laptop (8GB/1TB HDD + 256GB SSD/144Hz GTX 1650 4GB/Backlit Keyboard/2.2kg), 15-dk0050TX"
                    price={89990}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71c4zWesnGL._SX569_.jpg"
                />
                <Product
                    id="6"
                    title="Acer Nitro 5 Intel Core i7-9th Gen 17.3-inch Display 1920 x 1080 Gaming Laptop (8GB Ram/1TB HDD/Window 10 Home/4GB NVIDIA GeForce GTX 1650 Graphics/Black/ ), AN517-51"
                    price={81990}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/414jbFMA2rL._SX425_.jpg"
                />
            </div>

            <div className='flex z-1 mx-1.5'>
                <Product
                    id="7"
                    title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case"
                    price={23409}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/914hFeTU2-L._AC_UY218_.jpg"
                />
            </div>
        </>

    )
}

export default Home
