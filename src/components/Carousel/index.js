
import React, { useEffect, useState } from "react";
import ItemsCarousel from 'react-items-carousel';

const Images = [
  {
    original: require("assets/img/3d/3d/1.jpg"),
    thumbnail: require("assets/img/3d/3d/1.jpg"),
  },
  {
    original: require("assets/img/3d/3d/2.jpg"),
    thumbnail: require("assets/img/3d/3d/1.jpg"),
  },
  {
    original: require("assets/img/3d/3d/3.jpg"),
    thumbnail: require("assets/img/3d/3d/1.jpg"),
  },
  {
    original: require("assets/img/3d/3d/4.jpg"),
    thumbnail: require("assets/img/3d/3d/1.jpg"),
  },
  {
    original: require("assets/img/3d/attachments/1.jpg"),
    thumbnail: require("assets/img/3d/3d/1.jpg"),
  },
  {
    original: require("assets/img/3d/attachments/2.jpg"),
    thumbnail: require("assets/img/3d/3d/1.jpg"),
  },
  {
    original: require("assets/img/3d/attachments/3.jpg"),
    thumbnail: require("assets/img/3d/3d/1.jpg"),
  },
];

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
            infiniteLoop={true}
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
            {Images.map((image, i) =>
            <div key={i} className="carousel-img-container">
              <div
                style={{
                  minHeight: '50vh',
                  maxHeight: '60vh',
                  backgroundImage: "url(" + image.original + ")",
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                className={`carousel ${activeItemIndex === i || activeItemIndex > Images.length ? 'active' : 'inactive'}`}
              />
              </div>
            )}
          </ItemsCarousel>
              {/* <h1>{activeItemIndex}</h1> */}
          </div>
    )
}

export default Gallery;