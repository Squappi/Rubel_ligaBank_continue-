import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Banner() {

  const banner = [
    {
      id: 0,
      title: 'Кредиты на любой случай',
      img: '../../image/banner2.png',
    },
    {
      id: 1,
      title: 'Кредиты на любой случай',
      img: '../../image/banner2.png',
    },
    {
      id: 3,
      title: 'Кредиты на любой случай',
      img: '../../image/banner3.png',
    }
  ]

  const [nextSlide, setNextSlide] = useState(1);

  let interval = setInterval(() => {
    if(nextSlide === 3) {
      setNextSlide(nextSlide / 3);
    } else {
      setNextSlide(nextSlide + 1);
    }
    clearInterval(interval);
  }, 4000);

  return(
    <>
      <section className={(nextSlide) ? "banner" : "banner-hidden"}>
        <div className="banner__gradient">
          <h2 className="visually-hidden">Баннер Лига Банк</h2>
            <div className="banner__wrapper">
              <div className="banner__description">
                <h2 className="banner__header">Лига Банк</h2>
                <p className="banner__text">Кредиты на любой случай</p>
                <Link to={"/"} className="banner__button">
                  <span className="banner__button-text">Рассчитать кредит</span>
                </Link>
              </div>
            </div>
        </div>
      </section>

      {/* <section className={(nextSlide === 2) ? "banner" : "banner-hidden"}>
        <div className="banner__gradient">
          <h2 className="visually-hidden">Баннер Лига Банк-2</h2>
            <div className="banner__wrapper">
              <div className="banner__description">
                <h2 className="banner__header">Лига Банк-2</h2>
                <p className="banner__text">Кредиты на любой случай</p>
                <Link to={"/"} className="banner__button">
                  <span className="banner__button-text">Рассчитать кредит</span>
                </Link>
              </div>
            </div>
        </div>
      </section>

      <section className={(nextSlide === 3) ? "banner" : "banner-hidden"}>
        <div className="banner__gradient">
          <h2 className="visually-hidden">Баннер Лига Банк-3</h2>
            <div className="banner__wrapper">
              <div className="banner__description">
                <h2 className="banner__header">Лига Банк-3</h2>
                <p className="banner__text">Кредиты на любой случай</p>
                <Link to={"/"} className="banner__button">
                  <span className="banner__button-text">Рассчитать кредит</span>
                </Link>
              </div>
            </div>
        </div>
      </section> */}

      <div className="banner__container-dot">
        {banner.map((item, index) => (
          <div 
            key={index} 
            className={nextSlide === index + 1 ? "banner__dot-active" : "banner__dot"}
          >
          </div>
        ))}
      </div>
    </>
  );
}

export default Banner;