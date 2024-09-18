import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 2 },
    400: { items: 1 },
    450: { items: 2 },
    600: { items: 3 },
    768: { items: 4 },
    568: { items: 4 },
    1024: { items: 6 },
};

const items = [
    <div className="item m" data-value="1" key="1">
        <img src="eimage/card 8.webp" alt="Card 1" className="carousel-image imgh" style={{cursor:"pointer"}} />
    </div>,
    <div className="item" data-value="2" key="2">
        <img src="eimage/card2.webp" alt="Card2" className="carousel-image imgh" style={{cursor:"pointer"}} />
    </div>,
    <div className="item" data-value="3" key="3">
        <img src="eimage/card3.webp" alt="Card3" className="carousel-image imgh" style={{cursor:"pointer"}} />
    </div>,
    <div className="item" data-value="4" key="4">
        <img src="eimage/card4.webp" alt="Card4" className="carousel-image imgh" style={{cursor:"pointer"}} />
    </div>,
    <div className="item" data-value="5" key="5">
        <img src="eimage/card5.webp" alt="Card5" className="carousel-image imgh" style={{cursor:"pointer"}} />
    </div>,
    <div className="item" data-value="6" key="6">
        <img src="eimage/card 6.webp" alt="Card 6" className="carousel-image imgh" style={{cursor:"pointer"}} />
    </div>,
    <div className="item" data-value="7" key="7">
        <img src="eimage/card 7.webp" alt="Card 7" className="carousel-image imgh" style={{cursor:"pointer"}} />
    </div>
];

const Slider = () => (
    <div className="mt-5">
        <AliceCarousel
            autoPlay
            autoPlayInterval={1000}
            buttonsDisabled
            dotsDisabled
            fadeOutAnimation
            infinite
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
        />
    </div>
);

export default Slider;
