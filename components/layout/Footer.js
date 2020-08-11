import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <footer className="footer-area ptb-120 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <p>Social Networks</p>

                                <ul className="social-links">
                                    <li><a href="https://twitter.com/elmaedesistemas" className="twitter" target="_blank"><i className="icofont-twitter"></i></a></li>
                                    <li><a href="https://www.instagram.com/elmaedesistemas_" className="dribbble" target="_blank"><i className="icofont-instagram"></i></a></li>
                                    <li><a href="https://www.behance.net/deibymejiaruiz" className="behance" target="_blank"><i className="icofont-behance"></i></a></li>
                                    <li><a href="https://dribbble.com/dmejia" className="dribbble" target="_blank"><i className="icofont-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget ml-4">

                                <ul className="list">
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">

                                <ul className="footer-recent-post">

                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Get in Touch</h3>

                                <p>it will be a pleasure to assist you</p>

                                <ul className="footer-contact-info">
                                    <li>
                                        <i className="icofont-google-map"></i>
                                        <span>Location:</span>
                                        San José, Costa Rica
                                    </li>

                                    <li>
                                        <i className="icofont-phone"></i>
                                        <span>Phone:</span>
                                        <a href="#">+506 86767543</a>
                                    </li>

                                    <li>
                                        <i className="icofont-email"></i>
                                        <span>Email:</span>
                                        <a href="#">dmejia1204@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <p>Copyright @2020. All rights reserved.</p>
                            </div>

                            <div className="col-lg-6 col-md-6 text-right">
                                <p>Design & Developed by <a href="https://arcadecrstudio.com" target="_blank">Arcade Studio</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={require("../../images/line-bg.png")} className="line-bg" alt="line-bg" />
                <div className="shape23">
                    <img src={require("../../images/shapes/23.png")} alt="shape" />
                </div>
                <div className="shape24">
                    <img src={require("../../images/shapes/24.png")} alt="shape" />
                </div>
                <div className="shape27">
                    <img src={require("../../images/shapes/27.png")} alt="shape" />
                </div>
            </footer>
        );
    }
}

export default Footer;
