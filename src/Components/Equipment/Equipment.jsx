import "./Equipment.css";

import rotateImage from "../../images/rotate.avif";
import degassingImage from "../../images/degassing unit.avif";
import dryingImage from "../../images/drying.avif";
import utMachineImage from "../../images/ut machine.avif";
import waterJacketImage from "../../images/water jacket.avif";

const equipmentData = [
  {
    number: "01",
    title: "Cylinder Rotating Vise",
    image: rotateImage,
    description:
      "Used for securely holding and rotating cylinders during inspection, cleaning and valve-related service operations. It provides stable handling and helps technicians work safely and efficiently.",
  },
  {
    number: "02",
    title: "Degassing Unit",
    image: degassingImage,
    description:
      "Used to safely remove residual gas from the cylinder before testing and servicing. Proper degassing helps prepare the cylinder for subsequent inspection and hydro testing procedures.",
  },
  {
    number: "03",
    title: "Dryers",
    image: dryingImage,
    description:
      "Used to remove moisture from the cylinder after hydro testing and cleaning. Thorough drying helps prevent internal moisture and prepares the cylinder for further inspection and service.",
  },
  {
    number: "04",
    title: "UT Machine",
    image: utMachineImage,
    description:
      "Ultrasonic testing equipment is used to examine cylinder material and identify possible defects or variations that may not be visible during a normal visual inspection.",
  },
  {
    number: "05",
    title: "Water Jacket",
    image: waterJacketImage,
    description:
      "Used for hydrostatic testing of cylinders through the water jacket method. The setup helps measure cylinder expansion during pressure testing and supports systematic assessment of cylinder integrity.",
  },
];

const Equipment = () => {
  return (
    <section className="mht-equipment" id="equipment">

      <div className="mht-equipment__container">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div
          className="mht-equipment__header"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="100"
        >
          <p className="mht-equipment__eyebrow">
            SPECIALIZED EQUIPMENT
          </p>

          <h2 className="mht-equipment__title">
            Advanced Testing &amp; Safety Equipment
          </h2>

          <p className="mht-equipment__intro">
            Our facility is equipped with specialized machinery and testing
            equipment to support safe, accurate and systematic CNG cylinder
            inspection and maintenance.
          </p>
        </div>


        {/* =====================================================
            EQUIPMENT GRID
        ===================================================== */}

        <div className="mht-equipment__grid">

          {equipmentData.map((equipment, index) => (
            <article
              className="mht-equipment__card"
              key={equipment.number}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="850"
              data-aos-delay={index * 100}
              data-aos-offset="100"
            >

              {/* Image */}

              <div className="mht-equipment__image-wrap">
                <img
                  src={equipment.image}
                  alt={equipment.title}
                  className="mht-equipment__image"
                />
              </div>


              {/* Content */}

              <div className="mht-equipment__content">

                <span className="mht-equipment__number">
                  {equipment.number}
                </span>

                <h3>
                  {equipment.title}
                </h3>

                <p>
                  {equipment.description}
                </p>

                <span className="mht-equipment__line" />

              </div>

            </article>
          ))}


          {/* =====================================================
              CTA CARD
          ===================================================== */}

          <article
            className="mht-equipment__cta"
            data-aos="fade-up"
            data-aos-duration="850"
            data-aos-delay="300"
            data-aos-offset="100"
          >

            <div className="mht-equipment__cta-content">

              <p className="mht-equipment__cta-eyebrow">
                SAFETY • ACCURACY • RELIABILITY
              </p>

              <h3>
                Equipped for Safe,
                <br />
                Accurate Testing
              </h3>

              <p>
                Professional equipment and systematic testing processes
                help us deliver dependable CNG cylinder inspection and
                certification services.
              </p>

              <a
                href="#contact"
                className="mht-equipment__cta-button"
              >
                <span>BOOK A SERVICE</span>
                <span>→</span>
              </a>

            </div>

          </article>

        </div>

      </div>

    </section>
  );
};

export default Equipment;