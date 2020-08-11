import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';
import Banner from '../components/freelancer-portfolio-animation/Banner';
import About from '../components/freelancer-portfolio-animation/About';
import Footer from '../components/layout/Footer';
import Services from '../components/freelancer-portfolio-animation/Services';
import ChooseUs from '../components/digital-agency/ChooseUs';
import Crafting from '../components/digital-agency/Crafting';
import Works from '../components/freelancer-portfolio-animation/Works';
import Feedback from '../components/freelancer-portfolio-animation/Feedback';
import HowWeWork from '../components/digital-agency/HowWeWork';
import Team from '../components/digital-agency/Team';
import Cta from '../components/freelancer-portfolio-animation/Cta';
import Skills from '../components/freelancer-portfolio-animation/Skills';
import Funfacts from '../components/freelancer-portfolio-animation/Funfacts';
import Blog from '../components/freelancer-portfolio-animation/Blog';
import Partner from '../components/digital-agency/Partner';
import Contact from '../components/digital-agency-animation/Contact';

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-175213951-1"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `<!-- Global site tag (gtag.js) - Google Analytics -->
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-163332503-1"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());
                gtag('config', 'UA-175213951-1');
              </script>
              `,
                    }}
                />
                <Navbar />
                <Banner />
                <About />
                <Services />
                <Works />
                <Skills />
                <Funfacts />
                <Contact />
                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
