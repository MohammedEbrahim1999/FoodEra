import React from 'react'
import './Footer.css';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <ul>
                            <li><a href="#"> Register </a></li>
                            <li><a href="#"> Forum </a></li>
                            <li><a href="#"> Affiliate</a></li>
                            <li><a href="#"> FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <div className="links">
                            <a href="#"> <i class="fa-brands fa-facebook-f"></i> </a>
                            <a href="#"> <i class="fa-brands fa-x-twitter"></i> </a>
                            <a href="#"> <i class="fa-brands fa-youtube"></i> </a>
                            <a href="#"> <i class="fa-brands fa-dribbble"></i> </a>
                            <a href="#"> <i class="fa-brands fa-linkedin-in"></i></a>
                            <a href="#"> <i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <p> &copy; 2024. Foodera. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;