import React from 'react';
import CardBox from '../components/CardBox.js';
import HomeSlider from './HomeSlider.js';
import SocialMedia from '../components/SocialMedia.js';
import AboutApp from './AboutApp.js';
import Insurance from './Insurance.js';

export default function HomeScreen() {

    return (
        <>
            <HomeSlider />
            <Insurance />
            <SocialMedia />
            <CardBox />
            <AboutApp />
        </>

    );

}