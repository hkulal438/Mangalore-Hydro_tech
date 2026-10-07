import "./About.css";

import aboutImage from "../../images/Industrial Gas Cylinder Test Operation.png";

const About = () => {
  return (
    <section id="about" className="mht-about">

      <div className="mht-about__container">

        {/* =====================================================
            LEFT SIDE - IMAGE
        ===================================================== */}

        <div
          className="mht-about__image-area"
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-offset="120"
        >

          <div className="mht-about__image-wrap">
            <img
              src={aboutImage}
              alt="Mangalore Hydro Tech CNG cylinder testing"
              className="mht-about__image"
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


        {/* =====================================================
            RIGHT SIDE - CONTENT
        ===================================================== */}

        <div
          className="mht-about__content"
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-offset="120"
        >

          {/* Eyebrow */}

          <div className="mht-about__eyebrow">
            <span></span>
            ABOUT MANGALORE HYDRO TECH
          </div>


          {/* Main Heading */}

          <h2 className="mht-about__title">
            Mangalore Hydro Tech
            <br />

            <span>Trusted Experts in CNG</span>
            <br />

            Cylinder Testing & Safety
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


          {/* =====================================================
              BOTTOM INFORMATION
          ===================================================== */}

          <div
            className="mht-about__info-row"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >

            {/* PESO */}

            <div className="mht-about__approval">

              <div className="mht-about__approval-icon">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 3l7 3v5c0 4.6-2.9 8.2-7 10-4.1-1.8-7-5.4-7-10V6l7-3Z" />

                  <path d="m8.5 12 2.2 2.2 4.8-5" />
                </svg>

              </div>

              <div className="mht-about__approval-content">

                <strong>
                  PESO Approved
                </strong>

                <span>
                  Approved testing facility
                </span>

              </div>

            </div>


            {/* Learn More */}

            <a
              href="#services"
              className="mht-about__button"
            >
              <span>
                LEARN MORE
              </span>

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