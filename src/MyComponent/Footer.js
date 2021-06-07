import React from 'react'

export default function Footer(){
    return(
<>
       <div id="contact" class="contact-area section-padding">
    <div class="container">
        <div class="row">
            <div class="section-title">
                <h2>My <span>Contact</span></h2>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 box-contact-form">

                <form id="contact-form" method="post" action="contact.php" novalidate="true">

                    <div class="messages"></div> 

                    <div class="controls">

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input id="form_name" type="text" name="name" class="form-control" placeholder="Enter your full name *" required="required" data-error="Fullname is required."/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input id="form_email" type="" name="email" class="form-control" placeholder="Enter your email *" required="required" data-error="Valid email is required."/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <textarea id="form_message" name="message" class="form-control" placeholder="Your Message *" rows="4" required="required" data-error="Leave a message for me"></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <button class="btn btn-send" value="">Send message</button>
                            </div>
                        </div>
                    </div>

                </form>

            </div>

            <div class="col-xs-12 col-sm-12 col-md-5 col-md-offset-1">
                <div class="right-contact">
                    <div class="right-contact-text">
                        <i class="fa fa-map-marker"></i>
                        <h2>Address / Street</h2>
                        <p>No 123, Westwood Lane, USA</p> 
                    </div>
                    <div class="right-contact-text">
                        <i class="fa fa-phone"></i>
                        <h2>Contact Number</h2>
                        <p>+123 - 256 - 5456</p> 
                    </div>
                    <div class="right-contact-text">
                        <i class="fa fa-globe"></i>
                        <h2>Website Address</h2>
                        <p>www.yourwebsite.com</p> 
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>




<div class="footer-area">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <p>&copy; All Right Reserved By <a href="" target="_blank">Designer Prashant</a></p> 
            </div>
        </div>
    </div>
</div>
</>

    )
}
