import { useEffect, useState } from "react";
import "./Header.css";

import logoImage from "../../images/Logo_jpeg.jpg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header
            className={`mht-header ${isScrolled ? "mht-header--scrolled" : ""
                }`}
        >
            <div className="mht-header__inner">

                {/* Logo */}
                <a
                    href="#home"
                    className="mht-header__logo"
                    onClick={closeMenu}
                    aria-label="Mangalore Hydro Testing"
                >
                    <img
                        src={logoImage}
                        alt="Mangalore Hydro Testing"
                    />
                </a>

                {/* Desktop Navigation */}
                <nav
                    className={`mht-header__nav ${isMenuOpen ? "mht-header__nav--open" : ""
                        }`}
                    aria-label="Main Navigation"
                >
                    <a href="#home" onClick={closeMenu}>
                        Home
                    </a>

                    <a href="#about" onClick={closeMenu}>
                        About Us
                    </a>

                    <a href="#services" onClick={closeMenu}>
                        Services
                    </a>

                    <a href="#equipment" onClick={closeMenu}>
                        Testing Process
                    </a>

                    <a href="#why-choose-us" onClick={closeMenu}>
                        Why Choose Us
                    </a>
                    <a href="#faq" onClick={closeMenu}>
                        FAQ
                    </a>

                    <a href="#reviews" onClick={closeMenu}>
                        Reviews
                    </a>

                    <a href="#contact" onClick={closeMenu}>
                        Contact
                    </a>

                    {/* Mobile CTA */}
                    <a
                        href="#contact"
                        className="mht-header__mobile-cta"
                        onClick={closeMenu}
                    >
                        Book a Service <span>→</span>
                    </a>
                </nav>

                {/* Desktop Actions */}
                <div className="mht-header__actions">

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/918073974911"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mht-header__icon"
                        aria-label="WhatsApp"
                        title="WhatsApp"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                d="M12 2.2a9.8 9.8 0 0 0-8.48 14.72L2.2 21.8l4.94-1.3A9.8 9.8 0 1 0 12 2.2Zm0 17.9a8.07 8.07 0 0 1-4.1-1.12l-.3-.18-2.93.77.78-2.85-.2-.31A8.08 8.08 0 1 1 12 20.1Zm4.45-5.97c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>

                    {/* Phone */}
                    <a
                        href="tel:+919845871519"
                        className="mht-header__icon mht-header__phone"
                        aria-label="Call Us"
                        title="Call Us"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                d="M6.62 2.75a1.8 1.8 0 0 1 1.74 1.35l.85 3.27a1.8 1.8 0 0 1-.5 1.7L7.3 10.48a14.55 14.55 0 0 0 6.22 6.22l1.41-1.41a1.8 1.8 0 0 1 1.7-.5l3.27.85a1.8 1.8 0 0 1 1.35 1.74v2.1a1.8 1.8 0 0 1-1.98 1.79C10.26 20.45 3.55 13.74 2.73 5.73A1.8 1.8 0 0 1 4.52 3.75h2.1Z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>

                    {/* CTA */}
                    <a
                        href="#contact"
                        className="mht-header__cta"
                        onClick={closeMenu}
                    >
                        <span>Book a Service</span>
                        <span>→</span>
                    </a>

                </div>

                {/* Mobile Menu */}
                <button
                    type="button"
                    className={`mht-header__menu-button ${isMenuOpen
                            ? "mht-header__menu-button--active"
                            : ""
                        }`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    aria-expanded={isMenuOpen}
                >
                    <span />
                    <span />
                    <span />
                </button>

            </div>
        </header>
    );
};

export default Header;