import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  Parallax,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Hero.css";

import heroImage1 from "../../images/Hero.png";
import heroImage2 from "../../images/hero1.png";

const Hero = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  }, []);

  const slides = [
    {
      image: heroImage1,
    },
    {
      image: heroImage2,
    },
  ];

  return (
    <section id="home" className="mht-hero">

      <Swiper
        className="mht-hero__swiper"
        modules={[
          Autoplay,
          EffectFade,
          Parallax,
          Pagination,
          Navigation,
        ]}
        effect="fade"
        speed={1200}
        parallax={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".mht-hero__next",
          prevEl: ".mht-hero__prev",
        }}
        pagination={{
          el: ".mht-hero__pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `
              <span class="${className} mht-hero__pagination-bullet">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <circle
                    class="mht-hero__pagination-circle"
                    cx="15"
                    cy="15"
                    r="11"
                    fill="none"
                    stroke-width="2"
                  />
                  <circle
                    class="mht-hero__pagination-inner"
                    cx="15"
                    cy="15"
                    r="2"
                    stroke-width="2"
                  />
                </svg>
              </span>
            `;
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            <div className="mht-hero__slide">

              {/* Background Image */}
              <div
                className="mht-hero__image"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
                data-swiper-parallax="25%"
              />

              {/* Dark Overlay */}
              <div className="mht-hero__overlay" />

              {/* Content */}
              <div className="mht-hero__content">

                {/* Small Heading */}
                <div
                  className="mht-hero__eyebrow"
                  data-swiper-parallax-y="-80"
                  data-swiper-parallax-duration="900"
                >
                  <span></span>
                  MANGALORE HYDRO TECH
                </div>

                {/* Main Heading */}
                <h1
                  className="mht-hero__title"
                  data-swiper-parallax-y="-150"
                  data-swiper-parallax-duration="1200"
                >
                  Advanced CNG Cylinder
                  <br />
                  Testing, Inspection &{" "}
                  <span>Safety Services</span>
                </h1>

                {/* Description */}
                <p
                  className="mht-hero__description"
                  data-swiper-parallax-y="-200"
                  data-swiper-parallax-duration="1400"
                >
                  Professional hydro testing, inspection, cleaning and
                  maintenance services for CNG cylinders — carried out with
                  a strong focus on safety, quality and reliability.
                </p>

                {/* Button */}
                <div
                  className="mht-hero__button-wrap"
                  data-swiper-parallax-y="-250"
                  data-swiper-parallax-duration="1500"
                >
                  <a
                    href="#contact"
                    className="mht-hero__button"
                  >
                    <span>BOOK A SERVICE</span>

                    <svg
                      className="mht-hero__button-arrow"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M5 16h20" />
                      <path d="M18 9l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* PESO Approval Badge */}
                <div
                  className="mht-hero__peso"
                  data-swiper-parallax-y="-280"
                  data-swiper-parallax-duration="1600"
                >
                  <div className="mht-hero__peso-icon">
                    ✓
                  </div>

                  <div className="mht-hero__peso-content">
                    <strong>PESO APPROVED</strong>
                    <span>
                      Petroleum and Explosives Safety Organisation
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </SwiperSlide>
        ))}

      </Swiper>

      {/* Vertical Navigation */}
      <div className="mht-hero__navigation">

        <button
          type="button"
          className="mht-hero__nav-button mht-hero__prev"
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 32 32">
            <path d="M16 25V7" />
            <path d="M9 14l7-7 7 7" />
          </svg>
        </button>

        <button
          type="button"
          className="mht-hero__nav-button mht-hero__next"
          aria-label="Next slide"
        >
          <svg viewBox="0 0 32 32">
            <path d="M16 7v18" />
            <path d="M9 18l7 7 7-7" />
          </svg>
        </button>

      </div>

      {/* Pagination */}
      <div className="mht-hero__pagination"></div>

    </section>
  );
};

export default Hero;