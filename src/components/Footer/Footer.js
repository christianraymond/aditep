import React, { Component } from 'react';
import '../Footer/Footer.css';
import { FaFacebook, FaTelegram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Logo from '../../assets/images/HomePage/aditep-logo.jpg';

class Footer extends Component {
    render() {
        return (
            <footer class="footer-section">
                <div class="container">
                    <div class="footer-cta pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="cta-text">
                                        <h4>Find us</h4>
                                        <span><FaMapMarkerAlt style={{color:'#ff5e14', fontSize:'20px'}}/>97 Bezuidenhout Street Loren Ville Gauteng 2094</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-phone"><FaPhoneAlt/></i>
                                    <div class="cta-text">
                                        <h4>Call us</h4>
                                        <span>+27 78 460 1958</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="far fa-envelope-open"><FaEnvelope/></i>
                                    <div class="cta-text">
                                        <h4>Mail us</h4>
                                        <span>info@aditep.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-logo">
                                        <a href="index.html" /><img src={Logo} class="img-fluid" alt="logo" />
                                    </div>
                                    <div class="footer-text">
                                        <p>We've been building for over 40 years, staying true to our purpose improving the quality of life in Africa through infrastructure development.</p>
                                    </div>
                                    <div class="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="#"><i><FaFacebook/></i></a>
                                        <a href="#"><i><FaTwitter/></i></a>
                                        <a href="#"><i><FaLinkedin/></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">about</a></li>
                                        <li><a href="#">services</a></li>
                                        <li><a href="#">portfolio</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Our Services</a></li>
                                        <li><a href="#">Expert Team</a></li>
                                        <li><a href="#">Latest News</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div class="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i><FaTelegram/></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div class="copyright-text">
                                    <p>Copyright &copy; {new Date().getFullYear()}, All Right Reserved <a href="/">Aditep</a></p>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div class="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;