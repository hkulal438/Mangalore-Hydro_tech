import "./Offer.css";

import inspectionImage from "../../images/01_cng_cylinder_inspection.png";
import cleaningImage from "../../images/02_cng_cylinder_cleaning.png";
import hydroTestImage from "../../images/03_cng_cylinder_hydro_test.png";
import ultrasonicImage from "../../images/04_ultrasonic_flaw_detection.png";
import cameraImage from "../../images/05_internal_camera_inspection.png";
import dryingImage from "../../images/06_cylinder_drying.png";
import paintingImage from "../../images/07_cylinder_painting.png";
import certificationImage from "../../images/08_cng_certification.png";

const offerItems = [
  {
    image: inspectionImage,
    title: "CNG Cylinder Inspection",
    description:
      "Detailed inspection to check cylinder condition, external surface, fittings and overall safety.",
  },
  {
    image: cleaningImage,
    title: "CNG Cylinder Cleaning",
    description:
      "Thorough cleaning to remove dust, impurities and waste oil from inside the tank.",
  },
  {
    image: hydroTestImage,
    title: "CNG Cylinder Hydro Test",
    description:
      "Hydro test with water pressure to check cylinder strength, safety and reliability.",
  },
  {
    image: ultrasonicImage,
    title: "CNG Cylinder Ultra Sonic Flaw Detector",
    description:
      "Advanced ultrasonic Flaw Detector to identify external cylinder defects.",
  },
  {
    image: cameraImage,
    title: "Internal Inspection with Advanced Camera",
    description:
      "Internal inspection using an advanced camera to detect any internal cracks or abnormalities.",
  },
  {
    image: dryingImage,
    title: "Cylinder Drying",
    description:
      "Cylinders are properly dried after the test and service to prevent moisture and ensure longer life.",
  },
  {
    image: paintingImage,
    title: "Painting of Cylinder",
    description:
      "Painting of the cylinder if rusted to maintain protection, durability and a clean appearance.",
  },
  {
    image: certificationImage,
    title: "PESO - Approved CNG Certification",
    description:
      "PESO-approved CNG certification as applicable to the testing and certification process.",
  },
];

const Offer = () => {
  return (
    <section id="services" className="mht-offer">

      <div className="mht-offer__container">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <div
          className="mht-offer__heading"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="100"
        >

          <div className="mht-offer__eyebrow">
            <span></span>

            WHAT WE OFFER

            <span></span>
          </div>

          <h2>
            Professional CNG Testing,
            <br className="mht-offer__desktop-break" />
            Inspection &amp; Maintenance
          </h2>

          <p>
            Complete CNG cylinder care through systematic inspection,
            testing, cleaning and maintenance procedures.
          </p>

        </div>


        {/* =====================================================
            SERVICES
        ===================================================== */}

        <div className="mht-offer__grid">

          {offerItems.map((item, index) => (
            <article
              className="mht-offer__card"
              key={item.title}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
              data-aos-offset="100"
            >

              {/* Image */}

              <div className="mht-offer__image-wrap">

                <img
                  src={item.image}
                  alt={item.title}
                  className="mht-offer__image"
                  loading="lazy"
                />

                <div className="mht-offer__image-overlay"></div>

              </div>


              {/* Content */}

              <div className="mht-offer__content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                <span className="mht-offer__accent"></span>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Offer;