import React from "react";

function Contact() {
  return (
    <footer class="container">
    <div class="row" id="social">
      <div class="col-2">
        <h3>Social</h3>
      </div>
      <div class="row col-10">
        <a href="https://github.com/Pixelfobia" class="col-6 col-md btn footer-link" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/windows/1x/github.png" alt="GitHub icon" />GitHub</a>
        <a href="https://github.com/Pixelfobia/react-portfolio/" class="col-6 col-md btn footer-link" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios-glyphs/1x/linkedin.png" alt="LinkedIn icon" />Resume</a>
      </div>
    </div>
    
    <p>If you would like to contact me best place to do that would be: <a class="contact-link" href="mailto:sergiactive@gmail.com">my email</a></p>
  </footer>
  );
}

export default Contact;
