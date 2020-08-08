import React, { Component } from 'react';
import Link from 'next/link';

export class Banner extends Component {
    render() {
        return (
            <div className="main-banner freelancer-portfolio-home">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-image">
                                        <img src={require("../../images/rawi-images/image_banner.jpg")} alt="man" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-content">
                                        <h1 className="wow fadeInUp">I am a <br /> Software Development</h1>
                                        <ul className="wow fadeInDown">
                                            <li><a href="https://twitter.com/elmaedesistemas" className="twitter" target="_blank"><i className="icofont-twitter"></i></a></li>
                                            <li><a href="https://www.instagram.com/elmaedesistemas_" className="dribbble" target="_blank"><i className="icofont-instagram"></i></a></li>
                                            <li><a href="https://www.behance.net/deibymejiaruiz" className="behance" target="_blank"><i className="icofont-behance"></i></a></li>
                                            <li><a href="https://dribbble.com/dmejia" className="dribbble" target="_blank"><i className="icofont-dribbble"></i></a></li>
                                        </ul>
                                        <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <Link activeClassName="active" href="/contact">
                                            <a className="btn btn-primary wow fadeInUp">Contact Me</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="shape1">
                    <img src={require("../../images/shapes/1.png")} alt="shape" />
                </div>
                <div class="shape2">
                    <img src={require("../../images/shapes/2.png")} alt="shape" />
                </div>
                <div class="shape3">
                    <img src={require("../../images/shapes/3.png")} alt="shape" />
                </div>
                <div class="shape4">
                    <img src={require("../../images/shapes/4.png")} alt="shape" />
                </div>
                <div class="shape5">
                    <img src={require("../../images/shapes/5.png")} alt="shape" />
                </div>
                <div class="shape6">
                    <img src={require("../../images/shapes/6.png")} alt="shape" />
                </div>
                <div class="shape7">
                    <img src={require("../../images/shapes/7.png")} alt="shape" />
                </div>
                <div class="shape8">
                    <img src={require("../../images/shapes/8.png")} alt="shape" />
                </div>
                <div class="shape9 rotateme">
                    <img src={require("../../images/shapes/9.png")} alt="shape" />
                </div>
                <div class="shape10 rotateme">
                    <img src={require("../../images/shapes/10.png")} alt="shape" />
                </div>


                <div className="circle-shape1">
                    <img src={require("../../images/shapes/circle1.png")} alt="shape" />
                </div>
                <div className="circle-shape2">
                    <img src={require("../../images/shapes/circle2.png")} alt="shape" />
                </div>
                <div className="circle-shape3">
                    <img src={require("../../images/shapes/circle3.png")} alt="shape" />
                </div>
            </div>
        );
    }
}

export default Banner;
