import "./WhyChoose.css";

const whyChooseItems = [
  {
    icon: "iso",
    title: "ISO Certified",
    description:
      "Our quality and operational processes are supported by ISO certification, reflecting our commitment to consistent service quality, safety and professional standards.",
  },
  {
    icon: "shield",
    title: "Professional Hydro Testing",
    description:
      "Professional CNG cylinder testing using appropriate procedures and testing equipment with a strong focus on safety and accuracy.",
  },
  {
    icon: "tools",
    title: "Advanced Cleaning & Maintenance",
    description:
      "Comprehensive cleaning and maintenance services including dust, rust and impurity removal to support better cylinder performance.",
  },
  {
    icon: "users",
    title: "Experienced Technicians",
    description:
      "Skilled technicians handle inspection, testing, cleaning and maintenance with care, precision and attention to detail.",
  },
  {
    icon: "service",
    title: "Complete Service Under One Roof",
    description:
      "From inspection and cleaning to hydro testing and applicable certification, the complete service process is handled at our facility.",
  },
  {
    icon: "safety",
    title: "Safety First",
    description:
      "Every stage of the service is carried out with a strong focus on cylinder safety, quality and dependable service.",
  },
];

const Icon = ({ type }) => {
  switch (type) {
    case "iso":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3l7 3v5c0 4.6-2.9 8.2-7 10-4.1-1.8-7-5.4-7-10V6l7-3Z" />
          <path d="m8.5 12 2.2 2.2 4.8-5" />
        </svg>
      );

    case "shield":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3l7 3v5c0 4.6-2.9 8.2-7 10-4.1-1.8-7-5.4-7-10V6l7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case "tools":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m14.7 6.3 3-3a5 5 0 0 0-6.2 6.2L4 17a2.1 2.1 0 0 0 3 3l7.5-7.5a5 5 0 0 0 6.2-6.2l-3 3-2.2-1-.8-2.2Z" />
        </svg>
      );

    case "users":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c.4-3.4 2.3-5 6-5s5.6 1.6 6 5" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M16 15c2.8 0 4.5 1.5 5 4" />
        </svg>
      );

    case "service":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 8h8" />
          <path d="M8 12h8" />
          <path d="M8 16h5" />
        </svg>
      );

    case "safety":
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3 20 7v5c0 4.7-3.2 7.8-8 9-4.8-1.2-8-4.3-8-9V7l8-4Z" />
          <path d="M12 8v5" />
          <circle cx="12" cy="16.5" r=".7" />
        </svg>
      );
  }
};

const WhyChoose = () => {
  return (
    <section id="why-choose-us" className="mht-why">

      <div className="mht-why__container">

        {/* =========================================
            SECTION HEADING
        ========================================== */}

        <div
          className="mht-why__heading"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="100"
        >

          <div className="mht-why__eyebrow">
            <span></span>

            WHY CHOOSE US

            <span></span>
          </div>

          <h2>
            Why Choose Mangalore Hydro Tech?
          </h2>

          <p>
            We focus on safe, systematic and dependable CNG cylinder
            testing and maintenance services, with experienced technicians
            and appropriate testing equipment.
          </p>

        </div>


        {/* =========================================
            WHY CHOOSE GRID
        ========================================== */}

        <div className="mht-why__grid">

          {whyChooseItems.map((item, index) => (
            <article
              className="mht-why__card"
              key={item.title}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
              data-aos-offset="100"
            >

              {/* Icon */}

              <div className="mht-why__icon">
                <Icon type={item.icon} />
              </div>


              {/* Content */}

              <div className="mht-why__card-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChoose;