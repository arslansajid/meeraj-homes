
import React, { useEffect, useState } from "react";
import ItemsCarousel from 'react-items-carousel';

const Gallery  = () => {
    const [activeItemIndex, setactiveItemIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        setactiveItemIndex(activeItemIndex => activeItemIndex + 1);
        }, 2500); //2.5sec

        return () => {
        clearInterval(interval);
        };
    }, []);

    return (
      <div style={{
        pointerEvents: 'none'
      }}>
        <ItemsCarousel
            // leftChevron={<button>{'<'}</button>}
            // rightChevron={<button>{'>'}</button>}
            infiniteLoop={false}
            gutter={window.innerWidth * 0.025}
            activePosition={'center'}
            chevronWidth={60}
            disableSwipe={false}
            alwaysShowChevrons={false}
            numberOfCards={1}
            slidesToScroll={1}
            outsideChevron={false}
            showSlither={true}
            firstAndLastGutter={true}
            activeItemIndex={activeItemIndex}
            requestToChangeActive={value => setactiveItemIndex(value)}
          >
            {Array.from(new Array(activeItemIndex + 2)).map((_, i) =>
            <div key={i} className="carousel-img-container">
              <div
                style={{
                  minHeight: '50vh',
                  maxHeight: '60vh',
                  backgroundImage: "url(" + require("assets/img/gallery@2x.png") + ")",
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                className={`carousel ${activeItemIndex === i ? 'active' : 'inactive'}`}
              />
              </div>
            )}
          </ItemsCarousel>
              {/* <h1>{activeItemIndex}</h1> */}
          </div>
    )
}

export default Gallery;