import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
    require('../../images/rawi-images/coopeirazu.png'),
    require('../../images/rawi-images/gogrooming.png'),
    require('../../images/rawi-images/supexnew.jpg'),
    require('../../images/work-image/20.jpg'),
    require('../../images/rawi-images/fibooks.png'),
    require('../../images/rawi-images/ohm_innovations.png')
]

export class PortfolioContent extends Component {

    state = {
        photoIndex: 0,
        isOpenImage: false
    }

    render() {
        const { photoIndex, isOpenImage } = this.state;
        return (
            <section className="works-area ptb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-work">
                                <img src={require("../../images/rawi-images/coopeirazu.png")} alt="image" />

                                <div className="works-content">
                                    <h3><a href="#">Mobile Development</a></h3>
                                    <p>Development of Travel Delivery Application, for Cooperativa Taxis Irazú (MIT Family).</p>
                                </div>

                                <a href="#" className="link-btn"><i className="icofont-external-link"></i></a>

                                <Link href="#">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 0 })}}
                                    >
                                        <i className="icofont-expand"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-work">
                                <img src={require("../../images/rawi-images/gogrooming.png")} alt="image" />

                                <div className="works-content">
                                    <h3><a href="#">Mobile Development</a></h3>
                                    <p>Appointment Application Development, for Grooming (MIT Family).</p>
                                </div>

                                <a href="#" className="link-btn"><i className="icofont-external-link"></i></a>

                                <Link href="#">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 1 })}}
                                    >
                                        <i className="icofont-expand"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-work">
                                <img src={require("../../images/rawi-images/supexnew.jpg")} alt="image" />

                                <div className="works-content">
                                    <h3><a href="#">Backend Development</a></h3>
                                    <p>Development of REST API for online store, SUPEXCR (MIT family).</p>
                                </div>

                                <a href="#" className="link-btn"><i className="icofont-external-link"></i></a>

                                <Link href="#">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 2 })}}
                                    >
                                        <i className="icofont-expand"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        {isOpenImage && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => this.setState({ isOpenImage: false })}
                                onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                })
                                }
                                onMoveNextRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + 1) % images.length,
                                    })
                                }
                            />
                        )}

                        <div className="col-lg-6 col-md-6">
                            <div className="single-work">
                                <img src={require("../../images/rawi-images/coinpay.png")} alt="image" />

                                <div className="works-content">
                                    <h3><a href="#">Mobile Development</a></h3>
                                    <p>Development of Application for Payment of Public Services and Cryptocurrency Transactions (MIT family).</p>
                                </div>

                                <a href="#" className="link-btn"><i className="icofont-external-link"></i></a>

                                <Link href="#">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 3 })}}
                                    >
                                        <i className="icofont-expand"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-work">
                                <img src={require("../../images/rawi-images/fibooks.png")} alt="image" />

                                <div className="works-content">
                                    <h3><a href="#">Backend Development</a></h3>
                                    <p>Support to the electronic invoicing system of Fibooks (Ohm Innovations) </p>
                                </div>

                                <a href="#" className="link-btn"><i className="icofont-external-link"></i></a>

                                <Link href="#">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 4 })}}
                                    >
                                        <i className="icofont-expand"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-work">
                                <img src={require("../../images/rawi-images/ohm_innovations.png")} alt="image" />

                                <div className="works-content">
                                    <h3><a href="#">Web Development</a></h3>
                                    <p>Web Applications Developer and CFO.</p>
                                </div>

                                <a href="#" className="link-btn"><i className="icofont-external-link"></i></a>

                                <Link href="#">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 5 })}}
                                    >
                                        <i className="icofont-expand"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-work">
                                <img src={require("../../images/work-image/20.jpg")} alt="image" />

                                <div className="works-content">
                                    <h3><a href="#">Web Development</a></h3>
                                    <p>Development of Exam Application and Administrator for the Superintendency of Telecommunications (SUTEL) (MIT Family).</p>
                                </div>

                                <a href="#" className="link-btn"><i className="icofont-external-link"></i></a>

                                <Link href="#">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 5 })}}
                                    >
                                        <i className="icofont-expand"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        {/*<div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item"><a className="page-link" href="#"><i className="icofont-double-left"></i></a></li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#"><i className="icofont-double-right"></i></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </section>
        );
    }
}

export default PortfolioContent;
