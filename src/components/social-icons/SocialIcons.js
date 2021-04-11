import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons"; 
import { Nav } from 'react-bootstrap'
import './social-icons.sass'

class SocialIcons extends Component {
    render() {
        return (
            <div className="fixed-social-nav">
               <Nav className="align-items-center flex-column-reverse">
                    <span className="line-menu"></span>
                    <Nav.Item>
                        <Nav.Link target={"_blank"} href={"https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-es"}><FontAwesomeIcon icon={faLinkedinIn} /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><FontAwesomeIcon icon={faGithub} /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                    </Nav.Item> 
               </Nav> 
            </div>
        );
    }
}

export default SocialIcons;