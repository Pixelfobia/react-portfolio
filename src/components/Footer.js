import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCodepen } from '@fortawesome/free-brands-svg-icons'
import { ExternalLink } from 'react-external-link';
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Footer() {
	return (
		<footer>
			<div className="footer text-center gray-bg py-5">
				<div className="container">

					<div className="social-icon">
						<ExternalLink href="https://github.com/Pixelfobia">
							<FontAwesomeIcon icon={faGithub} />
							</ExternalLink>
						<ExternalLink href="#">
							<FontAwesomeIcon icon={faLinkedin} />
						</ExternalLink>
						<ExternalLink href="#">
							<FontAwesomeIcon icon={faCodepen} />
						</ExternalLink>
					</div>
					<div className="footer-menu mt-3">
						<nav>
							<ul>
								<li><a href="#">Home</a></li>
								<li><a href="#">Projects</a></li>
								<li><a href="#">Contact</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;