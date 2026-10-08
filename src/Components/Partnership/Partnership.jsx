import React from "react";
import "./Partnership.css";

import autoGasImage from "../../images/Mechanic Servicing CNG Engine in Workshop-1.png";
import hydroImage from "../../images/CNG Cylinder Pressure Testing Workshop.png";

const Partnership = () => {
  return (
    <section className="mht-partnership" id="partnership">
      <div className="mht-partnership__container">

        {/* Section Header */}
        <div
          className="mht-partnership__header"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="mht-partnership__eyebrow">
            <span></span>
            OUR PARTNERSHIP
            <span></span>
          </div>

          <h2>
            Complete CNG <strong>Support Under One Roof</strong>
          </h2>

          <p>
            Our partnership brings together CNG conversion expertise and
            professional cylinder testing to provide dependable and
            comprehensive CNG support.
          </p>
        </div>

        {/* Partnership Cards */}
        <div className="mht-partnership__grid">

          {/* Rex Auto Gas */}
          <article
            className="mht-partnership__card"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="mht-partnership__image">
              <img
                src={autoGasImage}
                alt="CNG conversion and vehicle servicing"
              />
            </div>

            <div className="mht-partnership__content">
              <span className="mht-partnership__label">
                CNG CONVERSION
              </span>

              <h3>Rex Auto Gas</h3>

              <p>
                Professional CNG conversion, installation and vehicle
                servicing solutions delivered with a focus on quality,
                performance and reliability.
              </p>

              <div className="mht-partnership__list">
                <span>Conversion</span>
                <span>Installation</span>
                <span>Servicing</span>
              </div>
            </div>
          </article>

          {/* Mangalore Hydro Tech */}
          <article
            className="mht-partnership__card"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <div className="mht-partnership__image">
              <img
                src={hydroImage}
                alt="CNG cylinder hydro testing"
              />
            </div>

            <div className="mht-partnership__content">
              <span className="mht-partnership__label">
                HYDRO TESTING
              </span>

              <h3>Mangalore Hydro Tech</h3>

              <p>
                Professional CNG cylinder hydro testing, inspection,
                cleaning and maintenance services with a strong focus
                on safety and compliance.
              </p>

              <div className="mht-partnership__list">
                <span>Hydro Testing</span>
                <span>Inspection</span>
                <span>Safety</span>
              </div>
            </div>
          </article>

        </div>

        {/* Bottom Statement */}
        <div
          className="mht-partnership__bottom"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <div className="mht-partnership__line"></div>

          <p>
            <strong>Conversion → Testing → Inspection → Safety</strong>
          </p>

          <span>
            A complete CNG service journey from installation to cylinder safety.
          </span>
        </div>

      </div>
    </section>
  );
};

export default Partnership;