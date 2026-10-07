import { useState } from "react";
import "./Testimonials.css";

const GOOGLE_REVIEWS_URL =
  "https://share.google/GYRxtpxreQxIPH9Fw";

/*
  IMPORTANT:
  Only use exact review text from the Google Business Profile.
*/

const googleReviews = [
  {
    name: "Preetham R Poojary",
    time: "3 months ago",
    rating: 5,
    review:
      "Smooth and hassle-free hydro testing. I was worried about the wait time, but they got it done faster than expected. Very organized staff and fair pricing.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentReview = googleReviews[activeIndex];

  const nextReview = () => {
    setActiveIndex((prev) =>
      prev === googleReviews.length - 1 ? 0 : prev + 1
    );
  };

  const previousReview = () => {
    setActiveIndex((prev) =>
      prev === 0 ? googleReviews.length - 1 : prev - 1
    );
  };

  return (
    <section className="mht-testimonials" id="reviews">
      <div className="mht-testimonials__container">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div
          className="mht-testimonials__header"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="100"
        >
          <div className="mht-testimonials__eyebrow">
            <span></span>

            <p>GOOGLE REVIEWS</p>

            <span></span>
          </div>

          <h2>
            What Our Customers <span>Say</span>
          </h2>

          <p>
            Trusted by customers for reliable CNG cylinder testing,
            inspection and professional service.
          </p>
        </div>


        {/* =====================================================
            RATING SUMMARY
        ===================================================== */}

        <div
          className="mht-testimonials__rating"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          data-aos-offset="100"
        >

          {/* Rating */}

          <div className="mht-testimonials__rating-score">
            <strong>4.9</strong>

            <div className="mht-testimonials__stars">
              ★★★★★
            </div>

            <span>Excellent</span>
          </div>


          {/* Divider */}

          <div className="mht-testimonials__divider"></div>


          {/* Customer Feedback */}

          <div className="mht-testimonials__rating-info">

            <div className="mht-testimonials__rating-icon">
              ★
            </div>

            <div>
              <strong>Customer Feedback</strong>

              <span>
                Genuine experiences from our customers
              </span>
            </div>

          </div>


          {/* Divider */}

          <div className="mht-testimonials__divider"></div>


          {/* Google Brand */}

          <div className="mht-testimonials__google">

            <div className="mht-testimonials__google-logo">

              <svg
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M24 9.5c3.54 0 6.72 1.22 9.22 3.6l6.86-6.86C35.9 2.4 30.47 0 24 0 14.61 0 6.51 5.38 2.56 13.22l7.99 6.21C12.45 13.29 17.78 9.5 24 9.5Z"
                />

                <path
                  fill="#34A853"
                  d="M46.98 24.55c0-1.64-.15-3.22-.42-4.73H24v9.02h12.89c-.55 2.98-2.25 5.5-4.79 7.19l7.74 6.02C44.36 37.88 46.98 31.7 46.98 24.55Z"
                />

                <path
                  fill="#FBBC05"
                  d="M10.55 28.57A14.48 14.48 0 0 1 9.77 24c0-1.58.27-3.11.78-4.57l-7.99-6.21A23.99 23.99 0 0 0 0 24c0 3.87.93 7.54 2.56 10.78l7.99-6.21Z"
                />

                <path
                  fill="#EA4335"
                  d="M24 48c6.47 0 11.9-2.13 15.84-5.95l-7.74-6.02c-2.15 1.44-4.91 2.3-8.1 2.3-6.22 0-11.55-4.09-13.45-9.61l-7.99 6.21C6.51 42.62 14.61 48 24 48Z"
                />
              </svg>

            </div>

            <div className="mht-testimonials__google-text">
              <strong>Google</strong>

              <span>
                Customer Reviews
              </span>
            </div>

          </div>

        </div>


        {/* =====================================================
            REVIEW SLIDER
        ===================================================== */}

        <div
          className="mht-testimonials__review-card"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="200"
          data-aos-offset="100"
        >

          {/* Decorative quote */}

          <div className="mht-testimonials__quote">
            “
          </div>


          {/* Review Header */}

          <div className="mht-testimonials__review-top">

            <div className="mht-testimonials__verified">

              <span className="mht-testimonials__verified-icon">
                ✓
              </span>

              <span>
                Verified Review
              </span>

            </div>

            <span className="mht-testimonials__counter">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(googleReviews.length).padStart(2, "0")}
            </span>

          </div>


          {/* Stars */}

          <div className="mht-testimonials__review-stars">
            {"★".repeat(currentReview.rating)}
          </div>


          {/* Review Text */}

          <blockquote>
            “{currentReview.review}”
          </blockquote>


          {/* Customer */}

          <div className="mht-testimonials__customer">

            <div className="mht-testimonials__avatar">
              {currentReview.name.charAt(0).toUpperCase()}
            </div>

            <div className="mht-testimonials__customer-details">

              <strong>
                {currentReview.name}
              </strong>

              <span>
                {currentReview.time}
              </span>

            </div>

          </div>

        </div>


        {/* =====================================================
            SLIDER CONTROLS
        ===================================================== */}

        <div
          className="mht-testimonials__navigation"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="300"
          data-aos-offset="100"
        >

          <button
            type="button"
            className="mht-testimonials__arrow"
            onClick={previousReview}
            aria-label="Previous review"
          >
            ←
          </button>


          <div className="mht-testimonials__dots">

            {googleReviews.map((review, index) => (
              <button
                key={`${review.name}-${index}`}
                type="button"
                className={`mht-testimonials__dot ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View review by ${review.name}`}
              />
            ))}

          </div>


          <button
            type="button"
            className="mht-testimonials__arrow"
            onClick={nextReview}
            aria-label="Next review"
          >
            →
          </button>

        </div>


        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div
          className="mht-testimonials__footer"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="350"
          data-aos-offset="100"
        >

          <div className="mht-testimonials__footer-content">

            <div className="mht-testimonials__footer-star">
              ★
            </div>

            <div>

              <strong>
                See More Customer Feedback
              </strong>

              <span>
                Explore more reviews and experiences on Google.
              </span>

            </div>

          </div>


          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mht-testimonials__button"
          >
            <span>
              View All Reviews
            </span>

            <span>
              ↗
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;