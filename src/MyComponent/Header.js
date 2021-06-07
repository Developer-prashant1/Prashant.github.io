import React from 'react'

export default function Header(){
    return(
 
<header className="nav-area navbar-fixed-top">
    <div className="container">
        <div className="row">
           

            <div className="col-md-12">
                <div className="main-menu">
                    <div className="navbar navbar-cus">
                        <div className="navbar-header">
                            <a href="index.html" className="navbar-brand"><span className="logo">Prashant</span></a> 
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>

                        <div className="navbar-collapse collapse">
                            <nav>
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="active"><a className="smooth-menu" href="#home">Home</a></li>
                                    <li><a className="smooth-menu" href="#about">About</a></li>
                                    <li><a className="smooth-menu" href="#services">Services</a></li>
                                    <li><a className="smooth-menu" href="#portfolio">Portfolio</a></li>
                                    <li><a className="smooth-menu" href="#resume">Experience</a></li>
                                    <li><a className="smooth-menu" href="#testimonial">Testimonial</a></li>
                                    <li><a className="smooth-menu" href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

           
        </div>
    </div>
</header>

    )
}