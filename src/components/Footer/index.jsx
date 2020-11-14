import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image5 from "../../images/app-store.png";
import Image6 from "../../images/google-play.png";
import "./style.css";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-1">
                    <div className="footer-2">
                        <section className="footer-sec">
                            <span>POPULAR CATEGORIES</span>
                            <ul>
                                <li>Cars</li>
                                <li>Flats for rent</li>
                                <li>Jobs</li>
                                <li>Mobile Phones</li>
                            </ul>
                        </section>
                        <section className="footer-sec">
                            <span>TRENDING SEARCHES</span>
                            <ul>
                                <li>Bikes</li>
                                <li>Watches</li>
                                <li>Books</li>
                                <li>Dogs</li>
                            </ul>
                        </section>
                        <section className="footer-sec">
                            <span>ABOUT US</span>
                            <ul>
                                <li>About OLX Group</li>
                                <li>OLX Blog</li>
                                <li>Contact Us</li>
                                <li>OLX for Businesses</li>
                            </ul>
                        </section>
                        <section className="footer-sec">
                            <span>OLX</span>
                            <ul>
                                <li>Help</li>
                                <li>Site Map</li>
                                <li>Legal & Privacy information</li>
                            </ul>
                        </section>
                        <section className="footer-sec">
                            <span>FOLLOW US</span>
                            <div className="footer-icons">
                                <ul>
                                    <li><Link to="http//facebook.com"><i className="fa fa-facebook-f"></i></Link></li>
                                    <li><Link to="http//twitter.com"><i className="fa fa-twitter"></i></Link></li>
                                    <li><Link to="http//youtube.com"><i className="fa fa-play"></i></Link></li>
                                    <li><Link to="http//instagram.com"><i className="fa fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                            <div className="app-btn-btns">
                                <p className="app-store-btn"><img src={Image5} alt="" /> <img src={Image6} alt="" /></p>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="footer-bar">
                    <div className="footer-bar-1">
                        <section>
                            <span>Other Countries </span>
                            <span>India</span> - <span>South Africa</span> - <span>Indonesia</span>
                        </section>
                        <section>
                            <span>Free Classifieds in Pakistan</span>
                            <span> . © 2006-2020 OLX</span>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;