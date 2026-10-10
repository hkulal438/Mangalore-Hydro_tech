
import "./Footer.css";
import { Link } from "react-router-dom";
import logoImage from "../../images/MHT Logo_icon.png";

const Footer = () => {
  return (
    <footer className="mht-footer" id="footer">
      <div className="mht-footer__container">

        {/* BRAND */}

        <div className="mht-footer__brand">
          <div className="mht-footer__logo-wrap">
            <Link to="/#home" aria-label="Mangalore Hydro Tech Home">
              <img
                src={logoImage}
                alt="Mangalore Hydro Testing"
                loading="lazy"
              />
            </Link>
          </div>

          <p>
            Professional CNG cylinder hydro testing, inspection,
            cleaning, maintenance and certification services in
            Mangaluru, Karnataka. Committed to safety, compliance
            and reliable service.
          </p>
        </div>

        {/* COMPANY */}

        <div className="mht-footer__column">
          <h3>COMPANY</h3>

          <Link to="/#home">Home</Link>
          <Link to="/#about">About Us</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#equipment">Testing Process</Link>
          <Link to="/#why-choose-us">Why Choose Us</Link>
          <Link to="/#faq">FAQ</Link>
          <Link to="/#reviews">Reviews</Link>
          <Link to="/#contact">Contact</Link>

          {/* PRIVACY POLICY */}

          <Link
            to="/privacy-policy"
            className="mht-footer__privacy-link"
          >
            Privacy Policy
          </Link>
        </div>

        {/* SERVICES */}

        <div className="mht-footer__column">
          <h3>SERVICES</h3>

          <Link to="/#services">CNG Cylinder Inspection</Link>
          <Link to="/#services">CNG Cylinder Cleaning</Link>
          <Link to="/#services">CNG Cylinder Hydro Test</Link>
          <Link to="/#services">Ultrasonic Flaw Detection</Link>
          <Link to="/#services">Internal Camera Inspection</Link>
          <Link to="/#services">Cylinder Drying</Link>
          <Link to="/#services">Cylinder Painting</Link>
          <Link to="/#services">PESO-Approved CNG Certification</Link>
        </div>

        {/* CONTACT */}

        <div className="mht-footer__contact">
          <h3>CONTACT</h3>

          {/* ADDRESS */}

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

          {/* PHONE 1 */}

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
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>+91 98458 71519</span>
          </a>

          {/* PHONE 2 */}

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
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>+91 94481 76835</span>
          </a>

          {/* WHATSAPP */}

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
              <path
                d="M8.5 8.1c.2-.5.5-.6.8-.6h.5c.2 0
                .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.5.6
                c-.2.2-.2.4-.1.6.5.9 1.2 1.6 2.1
                2.1.2.1.4.1.6-.1l.6-.5c.2-.2.4-.2.7-.1
                l1.7.7c.3.1.4.3.4.5v.5c0 .3-.1.6-.6.8
                -.5.2-1.4.3-2.7-.2-1.4-.5-2.6-1.7-3.1-2.3
                -.6-.6-1.7-2-1.9-3.1-.2-1.1.1-1.5.4-1.7Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>

            <span>+91 80739 74911</span>
          </a>

          {/* EMAIL */}

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

            <span>cng.mangalorehydrotech@gmail.com</span>
          </a>

          {/* BOOK A SERVICE */}

          <Link
            to="/#contact"
            className="mht-footer__cta"
          >
            <span>Book a Service</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}

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
