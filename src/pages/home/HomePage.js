import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './homePage.css';
import SellingItem from './components/sellingItem/SellingItem';
import Logo from '../../components/logo/Logo';

export default function HomePage() {
    const [expanded, setExpanded] = React.useState(null);
    return <div className='bg-letter sliderItem'>
        <Carousel

            autoPlay={true}>
            {/* #region firstBanner */}
            <div className='container h-100'>
                <div className='row h-100'>
                    <div className='col-12 col-md-5'>
                        <div className='d-flex flex-column justify-content-between align-items-end h-100'>
                            <SellingItem img={'/assets/images/gafas.jpg'} style={{ width: 300 }} />
                            <Logo />
                            <div className='d-flex justify-content-start w-100'>
                                <SellingItem img={'/assets/images/gafas.jpg'} style={{ width: 300 }} />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-5'>
                        <img src='/assets/images/first-banner.jpg' alt='banner' className='bannerImg' />
                    </div>
                    <div className='col-12 col-md-2 d-flex align-items-end'>
                        <SellingItem img={'/assets/images/shoes-girl.jpg'} url="#" />
                    </div>
                </div>
            </div>
            {/* #endregion firstBanner */}
            {/* #region secondBanner */}
            <div className='container h-100 position-relative'>
                <div className='row h-100'>
                    <div className='col-md-4 col-12'>
                        <img src='/assets/images/banner-2.jpg' alt='banner' className='bannerImg' />
                    </div>
                    <div className='col-md-8 col-12'>
                        <div style={{ height: '40%' }} className='d-flex justify-content-between'>
                            <SellingItem img={'/assets/images/gafas-tigre.jpg'} url="#" style={{ alignSelf: 'start', width: 300 }} />
                            <SellingItem img={'/assets/images/bolso-pepas.jpg'} url="#" style={{ alignSelf: 'end', width: 300 }} />
                        </div>
                        <div style={{ height: '60%' }} className='d-flex '>
                            <div className='flex-grow-1 d-flex align-items-center justify-content-center'>
                                <span className='text-white text-center' style={{ fontSize: 100, lineHeight: 1, fontWeight: 200 }}> Estampados <br /> Botánicos</span>
                            </div>
                            <SellingItem img={'/assets/images/tacon-transparente.jpg'} url="#" style={{ alignSelf: 'end', width: 300, height: '90%' }} />
                        </div>
                    </div>

                </div>
                <div className='seeMore' onClick={() => setExpanded(2)}>Ver más</div>
            </div>
            {/* #endregion secondBanner */}

        </Carousel>
    </div>
}