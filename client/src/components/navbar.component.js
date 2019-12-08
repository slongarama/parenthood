import React from 'react';
import Link from '@material-ui/core/Link';


export default function Navbar() {
  return (
    <header className="site-navbar site-navbar-target bg-white" role="banner">

      <div className="container">
        <div className="row align-items-center position-relative">

          <div className="col-lg-4">
            <nav className="site-navigation text-left ml-auto " role="navigation">
              <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                <Link className="nav-link" color="textPrimary" href="/">
                  Home
                </Link>
                <Link className="nav-link" color="textPrimary" href="/shop">
                  Shop
                </Link>
              </ul>
            </nav>
          </div>
          <div className="col-lg-4 text-center">
            <div className="site-logo">
              <a href="/">parenthood</a>
            </div>


            <div className="ml-auto toggle-button d-inline-block d-lg-none"><a href="/" className="site-menu-toggle py-5 js-menu-toggle text-white"><span className="icon-menu h3 text-primary"></span></a></div>
          </div>
          <div className="col-lg-4">
            <nav className="site-navigation text-right mr-auto " role="navigation">
              <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                <Link className="nav-link" color="textPrimary" href="/faq">
                  FAQ
                </Link>
                <Link className="nav-link" color="textPrimary" href="/about-us">
                  About Us
                </Link>
              </ul>
            </nav>
          </div>


        </div>
      </div>

    </header>
  );
}
