import "./Footer.css";
import logoImage from "../../images/logo_png.png";

const Footer = () => {
  return (
    <footer className="mht-footer">

      <div className="mht-footer__container">

        {/* =====================================================
            BRAND
        ====================================================== */}

        <div className="mht-footer__brand">

          {/* Logo */}
          <div className="mht-footer__logo-wrap">
            <img
              src={logoImage}
              alt="Mangalore Hydro Testing"
            />
          </div>

          {/* Description */}
          <p>
            Professional CNG cylinder hydro testing, inspection,
            cleaning, maintenance and certification services in
            Mangaluru, Karnataka. Committed to safety, compliance
            and reliable service.
          </p>

        </div>


        {/* =====================================================
            COMPANY
        ====================================================== */}

        <div className="mht-footer__column">

          <h3>COMPANY</h3>

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About Us
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#equipment">
            Testing Process
          </a>

          <a href="#why-choose-us">
            Why Choose Us
          </a>

          <a href="#faq">
            FAQ
          </a>

          <a href="#reviews">
            Reviews
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        {/* =====================================================
            SERVICES
        ====================================================== */}

        <div className="mht-footer__column">

          <h3>SERVICES</h3>

          <a href="#services">
            CNG Cylinder Inspection
          </a>

          <a href="#services">
            CNG Cylinder Cleaning
          </a>

          <a href="#services">
            CNG Cylinder Hydro Test
          </a>

          <a href="#services">
            Ultrasonic Flaw Detection
          </a>

          <a href="#services">
            Internal Camera Inspection
          </a>

          <a href="#services">
            Cylinder Drying
          </a>

          <a href="#services">
            Cylinder Painting
          </a>

          <a href="#services">
            PESO-Approved CNG Certification
          </a>

        </div>


        {/* =====================================================
            CONTACT
        ====================================================== */}

        <div className="mht-footer__contact">

          <h3>CONTACT</h3>


          {/* Address */}

          <a
            href="https://share.google/V7pCn9MOJdUz32KQL"
            target="_blank"
            rel="noopener noreferrer"
            className="mht-footer__contact-item"
          >

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
                r="2.3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>

            <span>
              Olavina Halli Road, near Mangalore Paper Mill,
              Mangaluru, Kotekar, Karnataka 575023
            </span>

          </a>


          {/* Phone 1 */}

          <a
            href="tel:+919845871519"
            className="mht-footer__contact-item"
          >

            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6.6 3.5 4.7 5.4c-.7.7-.9 1.7-.5 2.6
                2.1 5.1 6.7 9.7 11.8 11.8.9.4 1.9.2
                2.6-.5l1.9-1.9c.6-.6.6-1.6-.1-2.1
                l-2.6-2.1c-.5-.4-1.2-.4-1.7-.1l-1.7
                1.1c-2.2-1.2-4-3-5.2-5.2l1.1-1.7
                c.3-.5.3-1.2-.1-1.7L8.7 3.6c-.5-.7-1.5-.7-2.1-.1Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
            </svg>

            <span>
              +91 98458 71519
            </span>

          </a>


          {/* Phone 2 */}

          <a
            href="tel:+919448176835"
            className="mht-footer__contact-item"
          >

            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6.6 3.5 4.7 5.4c-.7.7-.9 1.7-.5 2.6
                2.1 5.1 6.7 9.7 11.8 11.8.9.4 1.9.2
                2.6-.5l1.9-1.9c.6-.6.6-1.6-.1-2.1
                l-2.6-2.1c-.5-.4-1.2-.4-1.7-.1l-1.7
                1.1c-2.2-1.2-4-3-5.2-5.2l1.1-1.7
                c.3-.5.3-1.2-.1-1.7L8.7 3.6c-.5-.7-1.5-.7-2.1-.1Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
            </svg>

            <span>
              +91 94481 76835
            </span>

          </a>


          {/* WhatsApp */}

          <a
            href="https://wa.me/918073974911"
            target="_blank"
            rel="noopener noreferrer"
            className="mht-footer__contact-item"
          >

            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 2.5a9.5 9.5 0 0 0-8.2 14.25L3
                21l4.4-1.15A9.5 9.5 0 1 0 12 2.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
            </svg>

            <span>
              +91 80739 74911
            </span>

          </a>


          {/* Email */}

          <a
            href="mailto:cng.mangalorehydrotech@gmail.com"
            className="mht-footer__contact-item"
          >

            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="1.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />

              <path
                d="m4 7 8 6 8-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
            </svg>

            <span>
              cng.mangalorehydrotech@gmail.com
            </span>

          </a>


          {/* CTA */}

          <a
            href="#contact"
            className="mht-footer__cta"
          >
            <span>Book a Service</span>
            <span>→</span>
          </a>

        </div>

      </div>


      {/* =====================================================
          BOTTOM
      ====================================================== */}

      <div className="mht-footer__bottom">

        <p>
          © {new Date().getFullYear()} Mangalore Hydro Testing.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;