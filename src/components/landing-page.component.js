import React, { Component } from 'react'
import Carousel from './carousel.component'
import TestimonialCarousel from './testimonial-carousel.component'
import Pricing from './pricing-section.component'

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
                            <div className="row mb-5 align-items-center">
                                <div className="col-md-7">
                                    <h2 className="heading-39291 mb-0">Our Work</h2>
                                </div>
                                <div className="col-md-5 text-right">
                                    <p className="mb-0"><a href="/" className="more-39291">View All Works</a></p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="media-02819">
                                        <a href="/" className="img-link"><img src="images/img_1.jpg" alt="" className="img-fluid" /></a>
                                        <h3><a href="/">Creative Modern House</a></h3>
                                        <span>New York City, USA</span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="media-02819">
                                        <a href="/" className="img-link"><img src="images/img_2.jpg" alt="" className="img-fluid" /></a>
                                        <h3><a href="/">Creative Modern House</a></h3>
                                        <span>New York City, USA</span>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="media-02819">
                                        <a href="/" className="img-link"><img src="images/img_3.jpg" alt="" className="img-fluid" /></a>
                                        <h3><a href="/">Creative Modern House</a></h3>
                                        <span>New York City, USA</span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="media-02819">
                                        <a href="/" className="img-link"><img src="images/img_4.jpg" alt="" className="img-fluid" /></a>
                                        <h3><a href="/">Creative Modern House</a></h3>
                                        <span>New York City, USA</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="site-section bg-primary">
                        <div className="container">
                            <div className="row mb-5 align-items-center">
                                <div className="col-md-7">
                                    <h2 className="heading-39291 text-white mb-3">What We Do</h2>
                                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis velit iure possimus repellendus, esse minus illum nobis deleniti?</p>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                                    <div className="service-29193 text-center">
                                        <span className="img-wrap mb-5">
                                            <img src="fonts/flaticon/svg/002-kitchen.svg" alt="" className="img-fluid" />
                                        </span>
                                        <h3 className="mb-4"><a href="/">Reiciendis Velit</a></h3>
                                        <p>Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis incidunt distinctio voluptate .</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                                    <div className="service-29193 text-center">
                                        <span className="img-wrap mb-5">
                                            <img src="fonts/flaticon/svg/003-lamp.svg" alt="" className="img-fluid" />
                                        </span>
                                        <h3 className="mb-4"><a href="/">Incidunt Distinctio</a></h3>
                                        <p>Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis incidunt distinctio voluptate .</p>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay="">
                                    <div className="service-29193 text-center">
                                        <span className="img-wrap mb-5">
                                            <img src="fonts/flaticon/svg/001-stairs.svg" alt="" className="img-fluid" />
                                        </span>
                                        <h3 className="mb-4"><a href="/">Reiciendis Velit Iure</a></h3>
                                        <p>Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis incidunt distinctio voluptate .</p>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay="">
                                    <div className="service-29193 text-center">
                                        <span className="img-wrap mb-5">
                                            <img src="fonts/flaticon/svg/004-blueprint.svg" alt="" className="img-fluid" />
                                        </span>
                                        <h3 className="mb-4"><a href="/">Boluptate Ipsum</a></h3>
                                        <p>Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis incidunt distinctio voluptate .</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                                    <div className="service-29193 text-center">
                                        <span className="img-wrap mb-5">
                                            <img src="fonts/flaticon/svg/006-pantone.svg" alt="" className="img-fluid" />
                                        </span>
                                        <h3 className="mb-4"><a href="/">Modern Elit</a></h3>
                                        <p>Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis incidunt distinctio voluptate .</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                                    <div className="service-29193 text-center">
                                        <span className="img-wrap mb-5">
                                            <img src="fonts/flaticon/svg/005-dinning-table.svg" alt="" className="img-fluid" />
                                        </span>
                                        <h3 className="mb-4"><a href="/">Dolor Sitame</a></h3>
                                        <p>Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis incidunt distinctio voluptate .</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <Pricing></Pricing>
                    <TestimonialCarousel></TestimonialCarousel>

                </div>
            </div>
        );
    }
}