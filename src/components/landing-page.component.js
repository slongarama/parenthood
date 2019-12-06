import React, { Component } from 'react'
import Carousel from './carousel.component'
import TestimonialCarousel from './testimonial-carousel.component'

export default class LandingPage extends Component {
    render() {
        return (
            <div classNameName="App">
                <div className="site-wrap" id="home-section">

                    <div className="site-mobile-menu site-navbar-target">
                        <div className="site-mobile-menu-header">
                            <div className="site-mobile-menu-close mt-3">
                                <span className="icon-close2 js-menu-toggle"></span>
                            </div>
                        </div>
                        <div className="site-mobile-menu-body"></div>
                    </div>

                    <Carousel></Carousel>

                    <div className="site-section">
                        <div className="container">
                            <div className="mb-5 align-items-center">
                                <div className="text-center">
                                    <h2>How it Works</h2>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="info-icon">
                                        <img src="images/icon1.png" vspace="20" alt="" className="img-fluid" />
                                        <h4>Pick your gear</h4>
                                        <p> Select premium gear for your baby from our curated collection. You can rent it new or pre-loved, and you can also buy pre-loved items at a fraction of the price.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="info-icon">
                                        <img src="images/icon2.png" vspace="20" alt="" className="img-fluid" />
                                        <h4>Enjoy</h4>
                                        <p>We deliver your gear right to your home and you can keep it for as long as you need. Pay only for the time you used it!</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="info-icon">
                                        <img src="images/icon3.png" vspace="20" alt="" className="img-fluid" />
                                        <h4>Return!</h4>
                                        <p>When your baby outgrows the gear, send it back to us and choose your next item. No more worrying about clutter or waste!</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="site-section bg-primary">
                        <div className="container">
                            <div className="mb-5 align-items-center">
                                <div className="text-center">
                                    <h2 className="text-white mb-3">Our Process</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src="images/cycle.png" vspace="20" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-6">
                                    <h5 className="mb-0 mt-4 text-white"> Source </h5>
                                    <p className="mb-0 mt-4 text-white">
                                        The source of our incredible like new inventory is directly from manufacturers. We take any products that were returned to them in like new condition, usually because the original customer decided it didn't fit into their room.
                                    </p>
                                    <h5 className="mb-0 mt-4 text-white"> Restore </h5>
                                    <p className="mb-0 mt-4 text-white">
                                        All of our acquired products are rigorously checked to ensure their safety in the like new returned condition. Any restorations are performed as per the directions of the manufacturer.
                                    </p>
                                    <h5 className="mb-0 mt-4 text-white"> Cleaning </h5>
                                    <p className="mb-0 mt-4 text-white">
                                        All of our products go through a safe and rigorous deep-cleaning process to ensure the highest quality standards to your baby.
    
    Give your baby the best while saving your wallet and our planet!
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="site-section bg-light">
                        <div className="container">
                            <div className="mb-5 align-items-center">
                                <div className="text-center">
                                    <h2 className="text-black mb-3">Three Ways to Make Parenthood Easier</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                                    <div className="service-29193 text-center">
                                        <h3><a href="/shop">Rent Preloved</a></h3>
                                        <p>Gently used gear at a discount <br />
                                            Rent as long as you need it <br />
                                            Pay as you go <br />
                                            Free shipping</p>
                                        <p className="mb-0 mt-4"><a href="/shop" className="btn">Coming Soon</a></p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                                    <div className="service-29193 text-center">
                                        <h3><a href="/shop">Rent Like New</a></h3>
                                        <p>Get like new gear <br />
                                            Use for as long as you need it <br />
                                            Pay as you go <br />
                                            Free shipping</p>
                                        <p className="mb-0 mt-4"><a href="/shop" className="btn btn-primary">Rent Now</a></p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                                    <div className="service-29193 text-center">
                                        <h3><a href="/shop">Buy Pre-loved</a></h3>
                                        <p> Pre-loved gear in great condition <br />
                                            Fraction of the price <br />
                                            Huge discounts <br />
                                            Free shipping</p>
                                        <p className="mb-0 mt-4"><a href="/shop" className="btn">Coming Soon</a></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="site-section">
                        <div className="container">
                            <div className="mb-5 align-items-center">
                                <div className="text-center">
                                    <h2 className="text-black mb-3">This is Parenthood</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-4 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                                    <div className="service-29193 text-center">
                                        <h3>Convenient</h3>
                                        <p> We do the research for you and  
                                        curate the most essential, high quality and safe products 
                                        in the market. We also ship, clean and store it for you.  
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-4 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                                    <div className="service-29193 text-center">
                                        <h3>Affordable</h3>
                                        <p>Did you know that parents tend to 
                                        spend $12,000 on baby gear every year?
                                        Give your wallet a break and pay 
                                        only for as long as you need it. </p>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-4 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                                    <div className="service-29193 text-center">
                                        <h3>Sustainable</h3>
                                        <p> Our model reduces the cluster at  
                                        your home, and the waste in our planet. 
                                        Let’s create a mindful consumption cycle together!</p>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-4 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                                    <div className="service-29193 text-center">
                                        <h3>Personalized</h3>
                                        <p> Get the best quality gear to help in 
                                        your baby’s development. Try out different
                                        products and swap them out as many times as you want.
</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <TestimonialCarousel></TestimonialCarousel>

                </div>
            </div>
        );
    }
}