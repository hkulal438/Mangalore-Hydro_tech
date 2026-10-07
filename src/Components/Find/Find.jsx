import "./Find.css";

const Find = () => {
  const googleMapsUrl =
    "https://share.google/V7pCn9MOJdUz32KQL";

  const address =
    "Olavina Halli Road, near Mangalore Paper Mill, Mangaluru, Kotekar, Karnataka 575023";

  return (
    <section className="mht-find" id="find-us">

      <div className="mht-find__container">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div
          className="mht-find__header"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="100"
        >

          <div className="mht-find__eyebrow">
            <span></span>

            <p>FIND US</p>

            <span></span>
          </div>

          <h2>
            Visit Our <span>Facility</span>
          </h2>

        </div>


        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="mht-find__content">

          {/* =================================================
              LEFT ADDRESS CARD
          ================================================= */}

          <div
            className="mht-find__address-card"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-offset="120"
          >

            {/* Location Icon */}

            <div className="mht-find__address-icon">

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
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

              <p>
                {address}
              </p>


              {/* Phone */}

              <a
                href="tel:+919845871519"
                className="mht-find__phone"
              >

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M6.6 3.5 4.7 5.4c-.7.7-.9 1.7-.5 2.6 2.1 5.1 6.7 9.7 11.8 11.8.9.4 1.9.2 2.6-.5l1.9-1.9c.6-.6.6-1.6-.1-2.1l-2.6-2.1c-.5-.4-1.2-.4-1.7-.1l-1.7 1.1c-2.2-1.2-4-3-5.2-5.2l1.1-1.7c.3-.5.3-1.2-.1-1.7L8.7 3.6c-.5-.7-1.5-.7-2.1-.1Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span>
                  +91 98458 71519
                </span>

              </a>


              {/* Directions */}

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mht-find__directions"
              >

                <span>
                  GET DIRECTIONS
                </span>

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
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


          {/* =================================================
              RIGHT MAP / LOCATION CARD
          ================================================= */}

          <div
            className="mht-find__map-card"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
            data-aos-offset="120"
          >

            <div className="mht-find__map-pattern"></div>


            {/* Location Pin */}

            <div className="mht-find__map-location">

              <div className="mht-find__map-pin">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
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


              <h3>
                Mangalore Hydro Testing
              </h3>

              <p>
                Kotekar, Mangaluru, Karnataka 575023
              </p>


              {/* Google Maps Link */}

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mht-find__map-link"
              >

                <span>
                  View on Google Maps
                </span>

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
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

        </div>

      </div>

    </section>
  );
};

export default Find;