import React from 'react';

export default function Carousel() {
    return (
        <div className="owl-carousel-wrapper">
            <div className="box-92819">
                <div>
                    <h1 className=" mb-3 text-white">Give your baby the best while saving your wallet and our planet.</h1>
                    <p className="text-white" > Rent premium baby gear with Parenthood. </p>
                    <p className="mb-0 mt-4"><a href="/shop" className="btn btn-primary">Try it out</a></p>
                </div>
            </div>

            <div className="owl-carousel owl-1 ">
                <div className="ftco-cover-1" style={{ backgroundImage: "url('images/hero_1.jpg')" }}></div>
                <div className="ftco-cover-1" style={{ backgroundImage: "url('images/hero_2.jpg')" }}></div>
                <div className="ftco-cover-1" style={{ backgroundImage: "url('images/hero_3.jpg')" }}></div>
            </div>
        </div>
    )
}