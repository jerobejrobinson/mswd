import React, { useState } from "react";
import './style.css'

export default function Navbar() {
    return (
        <nav id="mobile-menu">
            <img src="https://ucarecdn.com/dbe39d68-f5f5-4692-9957-10299d4f650e/-/preview/500x500/-/quality/smart_retina/-/format/auto/" alt="Mid-South Web Designs Logo" />
            <div  class="hamburger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>  
    )
}
