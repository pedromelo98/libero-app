import React from 'react';
import HomeSlider from './HomeSlider.js';
import AboutApp from './AboutApp.js';
import Insurance from './Insurance.js';
import Footer from './Footer.js';

export default function HomeScreen() {

    return (
        <>
            <HomeSlider />
            <Insurance />
            <AboutApp />
            <Footer/>
        </>

    );

}