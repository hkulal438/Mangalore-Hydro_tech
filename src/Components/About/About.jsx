
import "./About.css";

import aboutImage from "../../images/Industrial Gas Cylinder Test Operation.png";
import pesoLogo from "../../images/PESO-removebg-preview.png";

const About = () => {
  return (
    <section id="about" className="mht-about">
      <div className="mht-about__container">

        {/* LEFT SIDE — IMAGE */}

        <div
          className="mht-about__image-area"
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-offset="120"
        >
          <div className="mht-about__image-wrap">
            <img
              src={aboutImage}
              alt="Industrial CNG cylinder testing at Mangalore Hydro Tech"
              className="mht-about__image"
              loading="lazy"
            />
          </div>

          {/* Experience Card */}

          <div
            className="mht-about__experience"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="250"
          >
            <strong>10+</strong>
            <span>
              YEARS OF INDUSTRY
              <br />
              EXPERIENCE
            </span>
          </div>
        </div>

        {/* RIGHT SIDE — CONTENT */}

        <div
          className="mht-about__content"
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-offset="120"
        >
          {/* Eyebrow */}

          <div className="mht-about__eyebrow">
            <span aria-hidden="true" />
            ABOUT MANGALORE HYDRO TECH
          </div>

          {/* Main Heading */}

          <h2 className="mht-about__title">
            Mangalore Hydro Tech
            <br />
            <span>Trusted Experts in CNG</span>
            <br />
            Cylinder Testing &amp; Safety
          </h2>

          {/* Description */}

          <p className="mht-about__text">
            Mangalore Hydro Tech is a professional CNG cylinder hydro
            testing, inspection, cleaning, maintenance and certification
            service provider based in Mangaluru, Karnataka. With over a
            decade of industry experience, we are committed to ensuring
            the safety, reliability and performance of CNG cylinders.
          </p>

          <p className="mht-about__text">
            Our facility is equipped with modern testing equipment and
            operated by skilled professionals who follow established
            safety practices and applicable testing procedures. From
            hydro testing and valve servicing to thorough cleaning and
            inspection, we provide dependable CNG cylinder care under
            one roof.
          </p>

          {/* APPROVAL AND LEARN MORE */}

          <div
            className="mht-about__info-row"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            {/* PESO Logo and Information */}

            <div className="mht-about__approval">
              <div className="mht-about__approval-logo">
                <img
                  src={pesoLogo}
                  alt="PESO logo"
                  loading="lazy"
                />
              </div>

              <div className="mht-about__approval-content">
                <strong>PESO Approved</strong>
                <span>Approved testing facility</span>
              </div>
            </div>

            {/* Learn More Button */}

            <a
              href="#services"
              className="mht-about__button"
            >
              <span>LEARN MORE</span>

              <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M5 16h20" />
                <path d="M18 9l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
