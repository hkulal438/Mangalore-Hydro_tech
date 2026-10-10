
import "./Find.css";

const Find = () => {
  const googleMapsUrl =
    "https://share.google/V7pCn9MOJdUz32KQL";

  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.9107526840126!2d74.8849264!3d12.784304800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35f2e19f6de8b%3A0xc04ca22455151e26!2sMangalore%20Hydro%20Tech%20(CNG%20Cylinder%20Hydro%20Testing%20Plant))!5e0!3m2!1sen!2sin!4v1791622306464!5m2!1sen!2sin";

  const address =
    "Olavina Halli Road, near Mangalore Paper Mill, Mangaluru, Kotekar, Karnataka 575023";

  return (
    <section className="mht-find" id="find-us">
      <div className="mht-find__container">

        {/* SECTION HEADER */}

        <div
          className="mht-find__header"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="100"
        >
          <div className="mht-find__eyebrow">
            <span aria-hidden="true" />
            <p>FIND US</p>
            <span aria-hidden="true" />
          </div>

          <h2>
            Visit Our <span>Facility</span>
          </h2>

          <p className="mht-find__subtitle">
            Visit Mangalore Hydro Tech for professional CNG
            cylinder testing and inspection services.
          </p>
        </div>

        {/* MAIN CONTENT */}

        <div className="mht-find__content">

          {/* LEFT — ADDRESS CARD */}

          <div
            className="mht-find__address-card"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-offset="120"
          >
            {/* Location Icon */}

            <div className="mht-find__address-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle
                  cx="12"
                  cy="9"
                  r="2.4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </div>

            <div className="mht-find__address-content">
              <h3>OUR ADDRESS</h3>

              <p className="mht-find__address-text">
                {address}
              </p>

              {/* Phone */}

              <a
                href="tel:+919845871519"
                className="mht-find__phone"
                aria-label="Call Mangalore Hydro Tech at 98458 71519"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M6.6 3.5 4.7 5.4c-.7.7-.9 1.7-.5 2.6 2.1 5.1 6.7 9.7 11.8 11.8.9.4 1.9.2 2.6-.5l1.9-1.9c.6-.6.6-1.6-.1-2.1l-2.6-2.1c-.5-.4-1.2-.4-1.7-.1l-1.7 1.1c-2.2-1.2-4-3-5.2-5.2l1.1-1.7c.3-.5.3-1.2-.1-1.7L8.7 3.6c-.5-.7-1.5-.7-2.1-.1Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span>+91 98458 71519</span>
              </a>

              {/* Directions */}

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mht-find__directions"
              >
                <span>GET DIRECTIONS</span>

                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M14 5h5v5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 5 11 13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT — LIVE GOOGLE MAP */}

          <div
            className="mht-find__map-card"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
            data-aos-offset="120"
          >
            <iframe
              src={mapEmbedUrl}
              title="Mangalore Hydro Tech CNG Cylinder Hydro Testing Plant on Google Maps"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Find;
