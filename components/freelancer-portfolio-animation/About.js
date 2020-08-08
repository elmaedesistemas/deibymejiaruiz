import React, { Component } from 'react';

export class About extends Component {
    render() {
        return (
            <section className="about-area ptb-120">
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <span className="wow fadeInUp">About Me</span>
                                    <h2 className="wow fadeInDown">Who I am and What I do</h2>
                                </div>

                                

                                <p>Professional enthusiast of software engineering, music, design and photography. A professional with the ability to acquire new technical knowledge on their own.</p>

                                <p>Always aware that technology is advancing and we must do it with it and always be at the forefront. He is very aware that the work and order together manage to give the best results, he is a responsible, creative, very detailed and thorough person in every project he performs.</p>

                                <p>As developer, he is guided by his pleasure in creating solutions to help optimize processes, making these easier and faster, this facilitating the functions of those who make use them. Its objective is to give a feeling of satisfaction in the client by creating appropriate solutions for the needs.</p>

                                <a href="#" className="btn btn-primary wow fadeInUp">Download CV</a>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src={require("../../images/rawi-images/project_one.jpg")} alt="about-image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="circle-top rotateme">
                    <img src={require("../../images/circle-shape.png")} alt="circle" />
                </div>
                <div className="circle-bottom rotateme">
                    <img src={require("../../images/circle-shape.png")} alt="circle" />
                </div>
                <div className="shape6">
                    <img src={require("../../images/shapes/6.png")} alt="shape" />
                </div>
                <div className="shape10 rotateme">
                    <img src={require("../../images/shapes/10.png")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../images/shapes/7.png")} alt="shape" />
                </div>
            </section>
        );
    }
}

export default About;
