import {React, useState} from 'react';
import { Link } from "react-router-dom";
import pImage from './predAnalysis.svg';
import './styles.css';
import Features from './Features';

function HomePage() {
    const [scrollActive, setScrollActive] = useState(false);
    function isScroll() {
        if (window.scrollY > 0) setScrollActive(true);
        else setScrollActive(false);
    }
    window.addEventListener('scroll', isScroll);
    return (
    <div className="homepage-container">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <div className={scrollActive ? 'navbar-container navbar-scroll' : 'navbar-container'}>
            <h1 className="logo">{'</INV'}<span className="green">$</span>{'T/>'}</h1>
            <div className="nav-options-container">
                <span>Services</span>
                <span>FAQ</span>
                <span>About Us</span>
            </div>
            <div className="nav-button-container">
                <Link to="/login"><button className="sign-up">Login<span class="material-symbols-outlined green">login</span></button></Link>
                <button className="log-in">Start Free</button>
            </div>
        </div>
        <div className="callToAction-container">
            <div className="callToAction-text">
                <h1 className="callToAction-header">GET A LOOK INTO THE FUTURE<br/> WITH OUR <span className="green">PREDICTIVE</span> <span className="green">ANALYSIS MODEL.</span></h1>
                <p className="callToAction-p">We can help you get a heard start with your investments goals by providing you with the best stocks to invest in. Click the button below to get started with us right away!</p>
                <button className="callToAction-button">Start Now</button>
            </div>
            <div className="callToAction-image-container">
                <img src={pImage} className="callToAction-image" alt="Predictive Analysis"/>
            </div>
        </div>
        <div className="services-container">
            <h1 className="services-header"><span className="green">5-10X Your Portfolio</span> With These Simple Tools</h1>
        </div>

        <Features />

    </div>
    );
}

export default HomePage;