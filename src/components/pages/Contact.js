import React from "react";
import Footer from "../Footer";

function Contact() {
  return (<>
    <div className="contact-form">
      <div className="container">
        <div className="area-title text-center">
          <h2>Interested in Working Together?</h2>
          <p>Let's explore a partnership. Drop me an email. I'll ask you a few quick questions and then we'll schedule a call to discuss your project.</p>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <form id="contact-form" action="mail.php" method="post">
              <div className="row">
                <div className="col-md-6 form-group">
                  <label className="sr-only">First Name</label>
                  <input type="text" className="form-control input-lg" name="name" placeholder="First Name" />
                    <p className="help-block text-danger"></p>
                </div>
                <div className="col-md-6 form-group">
                  <label className="sr-only">Email</label>
                  <input type="email" className="form-control input-lg" name="email" placeholder="Email" />
                    <p className="help-block text-danger"></p>
                </div>
                <div className="col-md-12 form-group">
                  <label className="sr-only">Subject</label>
                  <input type="text" className="form-control input-lg" name="subject" placeholder="Subject" />
                    <p className="help-block text-danger"></p>
                </div>
                <div className="col-md-12 form-group">
                  <textarea className="form-control input-lg" rows="20" name="message" placeholder="Message*"></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="col-md-12 text-center">
                  <button type="submit" className="button-cv">Send Email</button>
                </div>

              </div>
            </form>
            <div className="ajax-response text-center"></div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
}

export default Contact;
