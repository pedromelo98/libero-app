import React from 'react';
import HomeSlider from './HomeSlider.js';
import {BrowserView, MobileView } from 'react-device-detect'
import AboutApp from './AboutApp.js';
import Insurance from './Insurance.js';
import InsuranceBox from '../components/InsuranceBox.js';

export default function HomeScreen() {

    return (
        <>
            <HomeSlider />
            <BrowserView>
                <InsuranceBox/>
            </BrowserView>
            <MobileView>
                <Insurance />
            </MobileView>
            <AboutApp />
        </>

    );

}