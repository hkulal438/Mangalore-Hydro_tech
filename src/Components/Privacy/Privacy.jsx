
import "./Privacy.css";

const Privacy = () => {
  return (
    <main className="mht-privacy" id="privacy-policy">
      <div className="mht-privacy__container">

        {/* Page Header */}
        <header
          className="mht-privacy__header"
          data-aos="fade-up"
        >
          <div className="mht-privacy__eyebrow">
            <span />
            <p>YOUR PRIVACY MATTERS</p>
            <span />
          </div>

          <h1>
            Privacy <span>Policy</span>
          </h1>

          <p className="mht-privacy__intro">
            Your privacy is important to us. Learn how Mangalore
            Hydro Tech collects, uses, and protects your personal
            information.
          </p>

          <div className="mht-privacy__effective-date">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="16"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M16 3v4M8 3v4M3 10h18"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>

            <span>
              Effective Date: <strong>10 October 2026</strong>
            </span>
          </div>
        </header>

        {/* Policy Content */}
        <div className="mht-privacy__layout">

          {/* Main Policy */}
          <article className="mht-privacy__content">

            <section
              className="mht-privacy__section"
              id="information-we-collect"
              data-aos="fade-up"
            >
              <span className="mht-privacy__section-number">01</span>

              <div className="mht-privacy__section-body">
                <h2>Information We Collect</h2>

                <p>
                  When you use our website, contact us, or submit
                  an enquiry, we may collect the following
                  information:
                </p>

                <ul>
                  <li>Name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>
                    Information you voluntarily provide through
                    contact forms or other communication channels
                  </li>
                  <li>
                    Technical information such as IP address,
                    browser type, and device information
                  </li>
                  <li>
                    Website usage data collected through cookies
                    and analytics tools, where enabled
                  </li>
                </ul>

                <p>
                  We collect only the information reasonably
                  necessary for the purposes described in this
                  Privacy Policy.
                </p>
              </div>
            </section>

            <section
              className="mht-privacy__section"
              id="how-we-use-information"
              data-aos="fade-up"
            >
              <span className="mht-privacy__section-number">02</span>

              <div className="mht-privacy__section-body">
                <h2>How We Use Your Information</h2>

                <p>
                  We may use your information for the following
                  purposes:
                </p>

                <ul>
                  <li>To respond to your enquiries and service requests</li>
                  <li>
                    To provide information about our services,
                    including CNG cylinder hydro testing,
                    inspection, cleaning, maintenance, valve
                    servicing, pressure testing, and related
                    safety services
                  </li>
                  <li>
                    To coordinate appointments and communicate
                    service-related updates
                  </li>
                  <li>
                    To improve our website, services, and user
                    experience
                  </li>
                  <li>
                    To measure and optimize advertising campaigns
                    on Google and Meta platforms, where applicable
                  </li>
                  <li>To maintain business and service records</li>
                  <li>
                    To comply with applicable legal and regulatory
                    requirements
                  </li>
                </ul>

                <p>
                  We do not sell or rent your personal information
                  to third parties. We may share information with
                  service providers when necessary to operate our
                  website, communications, or business services,
                  subject to appropriate safeguards.
                </p>
              </div>
            </section>

            <section
              className="mht-privacy__section"
              id="cookies-and-analytics"
              data-aos="fade-up"
            >
              <span className="mht-privacy__section-number">03</span>

              <div className="mht-privacy__section-body">
                <h2>Cookies and Analytics</h2>

                <p>
                  Our website may use cookies and analytics tools,
                  such as Google Analytics, to understand visitor
                  behaviour, improve website performance, and
                  measure marketing effectiveness, where these
                  tools are enabled.
                </p>

                <p>
                  Cookies may collect information about your
                  browsing activity and device. You can manage or
                  disable cookies through your browser settings.
                  Disabling certain cookies may affect some website
                  functionality.
                </p>

                <p>
                  Where required by applicable law, we will seek
                  consent before using non-essential cookies or
                  tracking technologies.
                </p>
              </div>
            </section>

            <section
              className="mht-privacy__section"
              id="third-party-services"
              data-aos="fade-up"
            >
              <span className="mht-privacy__section-number">04</span>

              <div className="mht-privacy__section-body">
                <h2>Third-Party Services</h2>

                <p>
                  Our website or business communications may use
                  third-party services, including:
                </p>

                <ul>
                  <li>Google Analytics, if enabled</li>
                  <li>Google Ads, if used for advertising</li>
                  <li>
                    Facebook and Instagram advertising services,
                    if used
                  </li>
                  <li>Google Maps for location and directions</li>
                  <li>
                    WhatsApp for customer enquiries and
                    communication
                  </li>
                </ul>

                <p>
                  These third-party services may process
                  information according to their own privacy
                  policies and terms. We encourage you to review
                  the relevant policies before using their
                  services.
                </p>
              </div>
            </section>

            <section
              className="mht-privacy__section"
              id="data-security"
              data-aos="fade-up"
            >
              <span className="mht-privacy__section-number">05</span>

              <div className="mht-privacy__section-body">
                <h2>Data Security</h2>

                <p>
                  Mangalore Hydro Tech takes reasonable technical
                  and organizational measures to protect personal
                  information against unauthorized access, misuse,
                  loss, alteration, or disclosure.
                </p>

                <p>
                  However, no method of electronic transmission
                  or storage can be guaranteed to be completely
                  secure.
                </p>
              </div>
            </section>

            <section
              className="mht-privacy__section"
              id="external-links"
              data-aos="fade-up"
            >
              <span className="mht-privacy__section-number">06</span>

              <div className="mht-privacy__section-body">
                <h2>External Links</h2>

                <p>
                  Our website may contain links to third-party
                  websites or services. Mangalore Hydro Tech is
                  not responsible for the privacy practices,
                  security, or content of those external websites.
                  Please review their respective privacy policies
                  when visiting them.
                </p>
              </div>
            </section>

            <section
              className="mht-privacy__section"
              id="consent-and-privacy-choices"
              data-aos="fade-up"
            >
              <span className="mht-privacy__section-number">07</span>

              <div className="mht-privacy__section-body">
                <h2>Your Consent and Privacy Choices</h2>

                <p>
                  By using our website or voluntarily providing
                  your information, you acknowledge the practices
                  described in this Privacy Policy, subject to
                  applicable law.
                </p>

                <p>
                  Where consent is required, we will seek it
                  before processing your personal information
                  for the relevant purpose. You may contact us
                  to request access to, correction of, or
                  deletion of your personal information, subject
                  to applicable legal requirements and
                  record-retention obligations.
                </p>
              </div>
            </section>

            <section
              className="mht-privacy__section"
              id="policy-updates"
              data-aos="fade-up"
            >
              <span className="mht-privacy__section-number">08</span>

              <div className="mht-privacy__section-body">
                <h2>Updates to This Privacy Policy</h2>

                <p>
                  Mangalore Hydro Tech may update this Privacy
                  Policy from time to time to reflect changes in
                  our services, website practices, or legal
                  requirements. Any updates will be published
                  on this page with a revised effective date.
                </p>
              </div>
            </section>

            <section
              className="mht-privacy__section mht-privacy__contact-section"
              id="contact-information"
              data-aos="fade-up"
            >
              <span className="mht-privacy__section-number">09</span>

              <div className="mht-privacy__section-body">
                <h2>Contact Information</h2>

                <p>
                  If you have any questions, concerns, or requests
                  regarding this Privacy Policy or the handling
                  of your personal information, please contact us:
                </p>

                <div className="mht-privacy__contact-card">
                  <div className="mht-privacy__contact-heading">
                    <div className="mht-privacy__contact-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />
                        <circle
                          cx="12"
                          cy="9"
                          r="2.4"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />
                      </svg>
                    </div>

                    <div>
                      <h3>Mangalore Hydro Tech</h3>
                      <p>Contact our team</p>
                    </div>
                  </div>

                  <div className="mht-privacy__contact-item">
                    <span className="mht-privacy__contact-label">
                      ADDRESS
                    </span>
                    <p>
                      Olavina Halli Road, near Mangalore Paper Mill,
                      Mangaluru, Kotekar, Karnataka – 575023
                    </p>
                  </div>

                  <div className="mht-privacy__contact-item">
                    <span className="mht-privacy__contact-label">
                      PHONE
                    </span>
                    <a href="tel:+919845871519">
                      +91 98458 71519
                    </a>
                  </div>

                  <div className="mht-privacy__contact-item">
                    <span className="mht-privacy__contact-label">
                      ADDITIONAL PHONE
                    </span>
                    <a href="tel:+919448176835">
                      +91 94481 76835
                    </a>
                  </div>

                  <div className="mht-privacy__contact-item">
                    <span className="mht-privacy__contact-label">
                      WHATSAPP
                    </span>
                    <a
                      href="https://wa.me/918073974911"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +91 80739 74911
                    </a>
                  </div>

                  <div className="mht-privacy__contact-item">
                    <span className="mht-privacy__contact-label">
                      EMAIL
                    </span>
                    <a href="mailto:cng.mangalorehydrotech@gmail.com">
                      cng.mangalorehydrotech@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </article>

          {/* SIDEBAR */}
          <aside className="mht-privacy__sidebar">
            <div className="mht-privacy__sidebar-card">
              <span className="mht-privacy__sidebar-label">
                QUICK NAVIGATION
              </span>

              <h2>Policy Contents</h2>

              <nav aria-label="Privacy policy sections">
                <a href="#information-we-collect">
                  <span>01</span> Information We Collect
                </a>
                <a href="#how-we-use-information">
                  <span>02</span> How We Use Information
                </a>
                <a href="#cookies-and-analytics">
                  <span>03</span> Cookies and Analytics
                </a>
                <a href="#third-party-services">
                  <span>04</span> Third-Party Services
                </a>
                <a href="#data-security">
                  <span>05</span> Data Security
                </a>
                <a href="#external-links">
                  <span>06</span> External Links
                </a>
                <a href="#consent-and-privacy-choices">
                  <span>07</span> Consent and Privacy Choices
                </a>
                <a href="#policy-updates">
                  <span>08</span> Policy Updates
                </a>
                <a href="#contact-information">
                  <span>09</span> Contact Information
                </a>
              </nav>

              <div className="mht-privacy__sidebar-note">
                <span className="mht-privacy__sidebar-note-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3 4.5 6v5.5c0 4.6 3.2 7.8 7.5 9.5 4.3-1.7 7.5-4.9 7.5-9.5V6L12 3Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m9 12 2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <p>
                  We are committed to handling your information
                  responsibly and securely.
                </p>
              </div>
            </div>
          </aside>

        </div>

        {/* BOTTOM NOTE */}

        <div className="mht-privacy__bottom">
          <span className="mht-privacy__bottom-line" />
          <p>
            Mangalore Hydro Tech
            <span> · </span>
            Privacy Policy
          </p>
          <span className="mht-privacy__bottom-line" />
        </div>

      </div>
    </main>
  );
};

export default Privacy;
