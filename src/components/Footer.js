import React from 'react';
import { ButtonLight } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-subscribe">
                <h3>Join the Adventure newsletter to receive our best vacation deals</h3>
                <p>
                    You can unsubscribe at any time.
                </p>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control" type="text" placeholder="Your Email" />
                    <ButtonLight className="button-submit" type="submit">Subscribe</ButtonLight>
                </form>
            </div>
            <div className="footer-links">
                <div className="row">
                    <div className=" col-6 col-lg-3">
                        <div className="footer-links-groups">
                            <h4 className="title">About Us</h4>
                            <Link to="#">How it works</Link>
                            <Link to="#">Testimonials</Link>
                            <Link to="#">Careers</Link>
                            <Link to="#">Investor</Link>
                            <Link to="#">Terms of Services</Link>
                        </div>
                    </div>
                    <div className=" col-6 col-lg-3">
                        <div className="footer-links-groups">
                            <h4 className="title">Contact Us</h4>
                            <Link to="#">Contact</Link>
                            <Link to="#">Support</Link>
                            <Link to="#">Destinations</Link>
                            <Link to="#">Sponsorship</Link>
                        </div>
                    </div>
                    <div className=" col-6 col-lg-3">
                        <div className="footer-links-groups">
                            <h4 className="title">Videos</h4>
                            <Link to="#">Submit Video</Link>
                            <Link to="#">Ambassador</Link>
                            <Link to="#">Agency</Link>
                            <Link to="#">Influencer</Link>
                        </div>
                    </div>
                    <div className=" col-6 col-lg-3">
                        <div className="footer-links-groups">
                            <h4 className="title">Social Media</h4>
                            <Link to="#">Instagram</Link>
                            <Link to="#">Facebook</Link>
                            <Link to="#">Youtube</Link>
                            <Link to="#">Twitter</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-social-media">
                <div className="footer-home">
                    <a href="/">TRVL
                        <i className="fab fa-typo3 ml-1" />
                    </a>
                </div>
                <div className="footer-copyright">
                    TRVL <i class="fa fa-copyright"></i> 2020
                </div>
                <div className="footer-icon">
                    <div className="footer-icon-list">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-youtube"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
