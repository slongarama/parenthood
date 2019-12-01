import React, { Component } from 'react';
import Pricing from './pricing-section.component';
import Hero from './hero.component.js'
import LazyHero from 'react-lazy-hero';

export default class OldLandingPage extends Component {
    render() {
        const pricingTitle = "Three Ways to Make Parenthood Easier"
        const pricingContent = "Choose one of these three options for easier, cheaper access to baby gear"

        return (
            <div>
                <LazyHero color='#ebe293' imageSrc='../../public/hero-baby.jpg'>
                    <h1>Parenthood, your way</h1>
                </LazyHero>
                <Hero title={pricingTitle} content={pricingContent}></Hero>
                <Pricing></Pricing>
            </div >
        );
    }
}
