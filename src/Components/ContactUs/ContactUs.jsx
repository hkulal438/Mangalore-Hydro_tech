import "./ContactUs.css";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.fullName.value.trim();
    const phone = form.phone.value.trim();
    const vehicle = form.vehicle.value;
    const service = form.service.value;
    const message = form.message.value.trim();

    const whatsappMessage = `
Hello Mangalore Hydro Testing,

I would like to enquire about your CNG cylinder testing services.

Name: ${name}
Phone: ${phone}
Vehicle Type: ${vehicle}
Service Required: ${service}
Message: ${message || "No additional message provided."}
    `.trim();

    const whatsappURL = `https://wa.me/918073974911?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="mht-contact" id="contact">

      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <div
        className="mht-contact__header"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="mht-contact__eyebrow">
          <span></span>
          <p>CONTACT US</p>
          <span></span>
        </div>

        <h2>
          Get In <span>Touch</span>
        </h2>

        <p>
          Book a service or get in touch with our team for all your
          CNG cylinder testing and certification needs.
        </p>
      </div>


      {/* =====================================================
          MAIN CONTACT AREA
      ===================================================== */}

      <div className="mht-contact__container">

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div
          className="mht-contact__left"
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-offset="120"
        >

          {/* ADDRESS */}

          <div className="mht-contact__card">
            <div className="mht-contact__icon">
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
                  r="2.3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </div>

            <div className="mht-contact__card-content">
              <h3>ADDRESS</h3>

              <p>
                Olavina Halli Road, near Mangalore Paper Mill,
                Mangaluru, Kotekar, Karnataka 575023
              </p>
            </div>
          </div>


          {/* EMAIL */}

          <div className="mht-contact__card">
            <div className="mht-contact__icon">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="1.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <path
                  d="m4 7 8 6 8-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="mht-contact__card-content">
              <h3>EMAIL</h3>

              <a href="mailto:cng.mangalorehydrotech@gmail.com">
                cng.mangalorehydrotech@gmail.com
              </a>
            </div>
          </div>


          {/* PHONE */}

          <div className="mht-contact__card">
            <div className="mht-contact__icon">
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
            </div>

            <div className="mht-contact__card-content">
              <h3>CALL US</h3>

              <div className="mht-contact__phone-list">
                <a href="tel:+919845871519">
                  +91 98458 71519
                </a>

                <a href="tel:+919448176835">
                  +91 94481 76835
                </a>
              </div>
            </div>
          </div>


          {/* WHATSAPP */}

          <div className="mht-contact__card">
            <div className="mht-contact__icon">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 2.7a9.3 9.3 0 0 0-8.03 13.97L3 21l4.43-1.16A9.3 9.3 0 1 0 12 2.7Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <path
                  d="M8.4 8.1c.2-.3.4-.3.7-.3h.4c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.5.6c.7 1.3 1.7 2.3 3 3l.6-.5c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.5v.4c0 .3 0 .5-.3.7-.4.4-1 .6-1.6.5-1.6-.3-3.1-1.1-4.4-2.3-1.3-1.3-2.1-2.8-2.3-4.4-.1-.6.1-1.2.6-1.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="mht-contact__card-content">
              <h3>WHATSAPP</h3>

              <a
                href="https://wa.me/918073974911"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 80739 74911
              </a>
            </div>
          </div>


          {/* CALL BUTTON */}

          <a
            href="tel:+919845871519"
            className="mht-contact__call-button"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M6.6 3.5 4.7 5.4c-.7.7-.9 1.7-.5 2.6 2.1 5.1 6.7 9.7 11.8 11.8.9.4 1.9.2 2.6-.5l1.9-1.9c.6-.6.6-1.6-.1-2.1l-2.6-2.1c-.5-.4-1.2-.4-1.7-.1l-1.7 1.1c-2.2-1.2-4-3-5.2-5.2l1.1-1.7c.3-.5-.3-1.2-.1-1.7L8.7 3.6c-.5-.7-1.5-.7-2.1-.1Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>CALL NOW</span>

            <span className="mht-contact__button-arrow">
              →
            </span>
          </a>

        </div>


        {/* =================================================
            RIGHT SIDE - FORM
        ================================================= */}

        <div
          className="mht-contact__form-wrapper"
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="150"
          data-aos-offset="120"
        >

          <form
            className="mht-contact__form"
            onSubmit={handleSubmit}
          >

            {/* FULL NAME */}

            <div className="mht-contact__field">
              <label htmlFor="fullName">
                Full Name
              </label>

              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                required
              />
            </div>


            {/* PHONE */}

            <div className="mht-contact__field">
              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>


            {/* VEHICLE TYPE */}

            <div className="mht-contact__field">
              <label htmlFor="vehicle">
                Vehicle Type
              </label>

              <select
                id="vehicle"
                name="vehicle"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select vehicle type
                </option>

                <option value="Car">
                  Car
                </option>

                <option value="Auto-Rickshaw">
                  Auto-Rickshaw
                </option>

                <option value="Commercial Vehicle">
                  Commercial Vehicle
                </option>

                <option value="Other CNG-Fitted Vehicle">
                  Other CNG-Fitted Vehicle
                </option>
              </select>
            </div>


            {/* SERVICE */}

            <div className="mht-contact__field">
              <label htmlFor="service">
                Service Required
              </label>

              <select
                id="service"
                name="service"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select service required
                </option>

                <option value="CNG Tank Testing">
                  CNG Tank Testing
                </option>

                <option value="CNG Cylinder Hydro Testing">
                  CNG Cylinder Hydro Testing
                </option>

                <option value="CNG Tank Cleaning">
                  CNG Tank Cleaning
                </option>

                <option value="CNG Valve Servicing">
                  CNG Valve Servicing
                </option>

                <option value="CNG Pressure Testing">
                  CNG Pressure Testing
                </option>

                <option value="CNG Tank Inspection">
                  CNG Tank Inspection
                </option>

                <option value="PESO-Approved CNG Certification">
                  PESO-Approved CNG Certification
                </option>

                <option value="CNG Tank Recertification">
                  CNG Tank Recertification
                </option>
              </select>
            </div>


            {/* MESSAGE */}

            <div className="mht-contact__field">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your requirements (optional)"
              ></textarea>
            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              className="mht-contact__submit"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="m21 3-7.4 18-3.8-7.8L2 9.4 21 3Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M10 13 21 3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>

              <span>
                REQUEST SERVICE
              </span>

              <span className="mht-contact__submit-arrow">
                →
              </span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactUs;