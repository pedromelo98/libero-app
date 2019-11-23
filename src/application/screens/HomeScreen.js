import React from 'react';
import HomeSlider from './HomeSlider.js';
import SocialMedia from '../components/SocialMedia.js';
import CarInsurance from '../components/CarInsurance.js';
import AboutApp from './AboutApp.js';
import Insurance from './Insurance.js';
import InsuranceBox from '../components/InsuranceBox.js';

export default function HomeScreen() {

    return (
        <>
            <HomeSlider />
            <Insurance />
            <AboutApp />
            <InsuranceBox/>
        </>

    );

}