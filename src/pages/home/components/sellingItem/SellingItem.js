import React from 'react';
import './sellingItem.css';

export default function SellingItem({img, url, subtitle, style}) {
    return <div style={{backgroundImage: `url(${img})`, ...style}} className='sellingItem'>
        <h1 className='text-white'>{subtitle}</h1>
        <a href={url} className='button btnBuy'>Buy Now</a>
    </div>
}