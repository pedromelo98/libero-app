import React from 'react';
import './Screens.css';
import '../styles/About.css';
import 'semantic-ui-css/semantic.min.css';

import { Grid, Label, Segment, Icon } from 'semantic-ui-react'
import { isMobile } from 'react-device-detect';

import * as CONSTANTS from "../constants/Links"

class AboutUs extends React.PureComponent {

    render() {
        if (isMobile) {
            return (
                <div className="About-Us" >
                    <text className="Intro-font" >Sobre a Líbero:</text>
                    <div className="Component-Mobile" >
                        <Segment className="Cards" color="green" raised>
                            <Label color='green' ribbon>
                                <p className="TitleFeatures" >
                                    <Icon name="handshake" size="large" />
                                    MISSÃO
                                </p>
                            </Label>
                            <p className="Text-Component" >
                                {CONSTANTS.missionLibero}
                            </p>

                        </Segment>
                        <Segment className="Cards" color="green" raised>
                            <Label color='green' ribbon>
                                <p className="TitleFeatures" >
                                    <Icon name="eye" size="large" />
                                    VISÃO
                                </p>
                            </Label>
                            <p className="Text-Component" >
                                {CONSTANTS.visionLibero}
                            </p>

                        </Segment>
                        <Segment color="green" className="Cards" raised>
                            <Label color='green' ribbon>
                                <p className="TitleFeatures" >
                                    <Icon name="check circle" size="large" />
                                    VALORES
                                </p>
                            </Label>
                            <p className="Text-Component" >
                                {CONSTANTS.valuesLibero}
                            </p>
                        </Segment>

                        <Segment color="green" className="Cards" raised>
                            <Label color='green' ribbon>
                                <img alt='quem somos' style={{ paddingBottom: 5, paddingRight: 5 }} src={require("../images/liberoicon.png")} />
                                QUEM SOMOS
                            </Label>
                            <p className="Text-Component" >
                                {CONSTANTS.aboutLibero}
                            </p>
                        </Segment>

                    </div>
                </div>
            )
        }
        return (
            <div className="About-Us" >
                <text className="Intro-font" >Sobre a Líbero:</text>
                <div className="Component" >
                    <Grid columns={2}>
                        <Grid.Column>
                            <Segment className="Cards" color="green" raised>
                                <Label color='green' ribbon>
                                    <p className="TitleFeatures" >
                                        <Icon name="handshake" size="big" />
                                        MISSÃO
                                    </p>
                                </Label>
                                <p className="Text-Component" >
                                    {CONSTANTS.missionLibero}
                                </p>

                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment className="Cards" color="green" raised>
                                <Label color='green' ribbon>
                                    <p className="TitleFeatures" >
                                        <Icon name="eye" size="big" />
                                        VISÃO
                                    </p>
                                </Label>
                                <p className="Text-Component" >
                                    {CONSTANTS.visionLibero}
                                </p>

                            </Segment>
                        </Grid.Column>
                        <div className="Values" >
                            <Segment color="green" className="Segment Cards" raised>
                                <Label color='green' ribbon>
                                    <p className="TitleFeatures" >
                                        <Icon name="check circle" size="big" />
                                        VALORES
                                    </p>
                                </Label>
                                <p className="Text-Component" >
                                    {CONSTANTS.valuesLibero}
                                </p>
                            </Segment>
                        </div>

                    </Grid>
                    <div className="Feature-Component" >
                        <div className="Feature-Text" >
                            <div className="Title-Component" >
                                <p className="Title-Feature" >QUEM SOMOS</p>
                            </div>
                            <div className="Text-Component" >
                                <p>
                                    {CONSTANTS.aboutLibero}
                                </p>
                            </div>
                        </div>
                        <div className="Feature-Image" >
                            <img alt='quem somos' src={require("../images/porta-libero.png")} className="ImgFeature" />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AboutUs;