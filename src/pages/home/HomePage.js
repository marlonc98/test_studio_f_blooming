import React, {useRef, useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './homePage.css';
import SellingItem from './components/sellingItem/SellingItem';
import Logo from '../../components/logo/Logo';
import GirlWear from './components/girlWear/GirlWear';
import MenWear from './components/manWear/ManWear';

export default function HomePage() {
    const [expanded, setExpanded] = React.useState(null);
    const expandedContainer = useRef(null);
    const carouseContainer = useRef(null);
    useEffect(() => {
        if (expanded != null) {
            expandedContainer.current.scrollIntoView({ behavior: 'smooth' });
        }else{
            carouseContainer.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [expanded])
    return <div>
        <div className='bg-letter sliderItem' ref={carouseContainer}>
            <Carousel
                infiniteLoop={true}
                interval={3000}
                autoPlay={expanded == null}>
                {/* #region firstBanner */}
                <div className='container'>
                    <div className='row h-md-100'>
                        <div className='col-12 col-md-5 d-md-none'>
                            <img src='/assets/images/first-banner.jpg' alt='banner' className='bannerImg' />
                        </div>
                        <div className='col-12 col-md-5'>
                            <div className='d-flex flex-column-reverse flex-md-column justify-content-between align-items-center align-items-md-end h-100 w-100'>
                                <SellingItem img={'/assets/images/gafas.jpg'} style={{ width: 200, height: 230 }} className={' my-3 my-md-0'} />
                                <div className='mt-md-3 w-100 d-flex flex-column align-items-center justify-content-between align-items-md-end flex-grow-1'>
                                    <div className=' my-3 my-md-0 me-md-3 flex-grow-1 d-flex align-items-center' style={{ width: 300 }}>
                                        <Logo />
                                    </div>
                                    <SellingItem img={'/assets/images/bolso.jpg'} style={{ width: 200, height: 230 }} className={'align-self-center align-self-md-start'} />
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-5 d-none d-md-block h-md-100'>
                            <img src='/assets/images/first-banner.jpg' alt='banner' className='bannerImg ' />
                        </div>
                        <div className='col-12 col-md-2 d-flex align-items-end my-3 my-md-0'>
                            <SellingItem img={'/assets/images/shoes-girl.jpg'} url="#" />
                        </div>
                    </div>
                </div>
                {/* #endregion firstBanner */}
                {/* #region secondBanner */}
                <div className='container h-100 position-relative'>
                    <div className='row h-md-100'>
                        <div className='col-md-4 col-12'>
                            <img src='/assets/images/banner-2.jpg' alt='banner' className='bannerImg' />
                        </div>
                        <div className='col-md-8 col-12'>
                            <div style={{ height: '40%' }} className='d-flex flex-column w-100 flex-md-row align-items-center justify-content-md-between'>
                                <SellingItem img={'/assets/images/gafas-tigre.jpg'} url="#" style={{ width: 300 }} className={'align-self-md-start my-3'} />
                                <SellingItem img={'/assets/images/bolso-pepas.jpg'} url="#" style={{ width: 200, height: 200, }} className={'me-md-5 align-self-md-end my-3'} />
                            </div>
                            <div style={{ height: '60%' }} className='d-flex  flex-column flex-md-row'>
                                <div className='flex-grow-1 d-flex align-items-center justify-content-center'>
                                    <span className='text-white text-center' style={{ fontSize: '3em', lineHeight: 1, fontWeight: 400 }}> Estampados <br /> Botánicos</span>
                                </div>
                                <SellingItem img={'/assets/images/tacon-transparente.jpg'} url="#" style={{ width: 300, height: 400 }} className={'align-self-center my-3 align-self-md-end'} />
                            </div>
                        </div>

                    </div>
                    {expanded != 2 && <div className='seeMore'><div onClick={() => setExpanded(2)}>Ver Más <span className="material-icons">
                        expand_more
                    </span></div></div>}
                </div>
                {/* #endregion secondBanner */}
                {/* #region thirdBanner */}
                <div className='container h-100 position-relative pb-5 mb-3 pb-md-0 mb-md-0'>
                    <div className='row h-md-100'>
                        <div className='col-md-4 col-12'>
                            <img src='/assets/images/bg-banner-3.jpg' alt='banner' className='bannerImg' />
                        </div>
                        <div className='col-md-5 col-12 d-flex flex-column'>
                            <div className='d-flex flex-column align-items-center align-items-md-end pe-md-5'>
                                <SellingItem img={'/assets/images/camisa.jpg'} url="#" style={{ alignSelf: 'start', width: '45%', height: 350 }} className={'align-self-center align-self-md-start my-2 my-md-0'} />
                                <SellingItem img={'/assets/images/correa.jpg'} url="#" style={{ alignSelf: 'start', width: '40%', height: 200, }} className={'movedUpImg align-self-center align-self-md-end'} />
                            </div>
                            <div className='flex-grow-1 d-flex align-items-center justify-content-center'>
                                <span className='text-white text-center' style={{ fontSize: 90, lineHeight: 1, fontWeight: 200 }}> Neutral Looks</span>
                            </div>
                        </div>
                        <div className='col-md-3 col-12 d-flex align-items-md-end justify-content-center'>
                            <SellingItem img={'/assets/images/zapato-cafe.jpg'} url="#" style={{ width: 300, height: 450 }} />
                        </div>
                    </div>
                    {expanded != 3 && <div className='seeMore'><div onClick={() => setExpanded(3)}>Ver Más <span className="material-icons">
                        expand_more
                    </span></div></div>}
                </div>
                {/* #endregion thirdBanner */}
            </Carousel>
        </div>
        {/* #region downpart */}
        <div ref={expandedContainer}>
            {expanded != null && <div className='d-flex justify-content-center text-white mb-2'><div onClick={() => setExpanded(null)} className='d-flex justify-content-center text-white align-items-center'>Ver Menos <span className="material-icons">
                expand_less
            </span></div></div>}
            {expanded == 2 && <GirlWear />}
            {expanded == 3 && <MenWear />}
        </div>
        {/* #endregion downpart */}
    </div>
}