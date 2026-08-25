import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../App.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/service', label: 'Service' },
    { to: '/contact', label: 'Contact' },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 12);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    return (
        <header className={isScrolled ? 'header-scrolled' : ''}>
            <div className="logo">
                <Link to='/' onClick={closeMenu}>
                    <img src="./assets/logo.svg" alt="logo" />
                    <h2>Business Construction</h2>
                </Link>
            </div>
            <nav className={isMenuOpen ? 'nav-open' : ''}>
                <ul className="nav-bar">
                    {navLinks.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                end={to === '/'}
                                onClick={closeMenu}
                                className={({ isActive }) => isActive ? 'nav-link-active' : ''}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <button
                className="menu-toggle"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                {isMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
            </button>
            <div
                className={isMenuOpen ? 'nav-backdrop nav-backdrop-open' : 'nav-backdrop'}
                onClick={closeMenu}
                aria-hidden="true"
            ></div>
        </header>
    )
}

export default Header
