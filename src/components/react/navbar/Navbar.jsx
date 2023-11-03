import React, { useState } from "react";
import './style.css'

export default function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(prev => !prev)
    }
    return (
        <>
            <nav id="mobileMenu">
                <a href="/">
                    <img src="/main/mswd-logo.svg" alt="Mid-South Web Designs Logo" />
                </a>
                <div className={`hamburger my-6 md:hidden ${click && 'active'}`} onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div id="menuLinks" className="hidden md:flex flex-row">
                    <a href="/about-us">About</a>
                    <a href="/services">Services</a>
                    <a href="/projects">Projects</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
            <nav id="mobileMenuLinks" className={`${click && 'active'}`}>
                <a href="/about-us">About</a>
                <a href="/services">Services</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </nav>
        </>
    )
}
