import { useState } from "react";
import "./FAQ.css";

const faqItems = [
  {
    question: "How much time does CNG hydro testing take?",
    answer:
      "CNG hydro testing usually takes 2 to 5 hours, depending on the vehicle type and cylinder condition. In some cases, it may take more than one day based on inspection requirements and service availability.",
  },
  {
    question: "Will I get a certificate after CNG hydro testing?",
    answer:
      "Yes. After successful testing, you will receive a valid hydro test certificate, which is mandatory for legal compliance and future inspections.",
  },
  {
    question: "What is the cost of CNG hydro testing?",
    answer:
      "The cost of CNG hydro testing depends on the vehicle type and cylinder specifications. For exact pricing, please contact us directly.",
  },
  {
    question: "What does CNG cylinder hydro testing include?",
    answer:
      "The testing process includes cylinder inspection and hydro testing using appropriate testing procedures and equipment. Additional cleaning, maintenance and inspection services may be carried out depending on the cylinder condition.",
  },
  {
    question: "Where is Mangalore Hydro Tech located?",
    answer:
      "Mangalore Hydro Tech is located at Olavina Halli Road, near Mangalore Paper Mill, Mangaluru, Kotekar, Karnataka 575023.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mht-faq">
      <div className="mht-faq__container">

        {/* Section Heading */}
        <div className="mht-faq__heading">
          <div className="mht-faq__eyebrow">
            <span></span>
            LEARN MORE
            <span></span>
          </div>

          <h2>Frequently Asked Questions</h2>
        </div>

        {/* FAQ List */}
        <div className="mht-faq__list">
          {faqItems.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                className={`mht-faq__item ${
                  isActive ? "mht-faq__item--active" : ""
                }`}
                key={item.question}
              >
                <button
                  type="button"
                  className="mht-faq__question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isActive}
                >
                  <span>{item.question}</span>

                  <span
                    className="mht-faq__icon"
                    aria-hidden="true"
                  >
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`mht-faq__answer ${
                    isActive ? "mht-faq__answer--open" : ""
                  }`}
                >
                  <div className="mht-faq__answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;