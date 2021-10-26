/* Side nav component used on mobile devices */
import React from 'react';
import M from 'materialize-css';


document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  });

const SideNav = ({handlePageChange}) => {
    return (
        
             <ul className="sidenav hover" id="mobile-links">
                    <li><a className="middle"
                        onClick={() => handlePageChange('Contact')}
                        href="#contact">Contact</a>
                    </li>
                    <li>
                        <a
                            onClick={() => handlePageChange('About Me')} href="#aboutme">About Me</a>
                    </li>
                    <li>
                        <a
                            onClick={() => handlePageChange('My Work')} href="#mywork">My Work</a>
                    </li>
                    <li>
                        <a href="https://github.com/Omrironen4" target="_blank">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/omri-ronen-a72766206/" target="_blank">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/106UkBzYzoWFOG0kt0m1K1aPvxABlSQDC/view?usp=sharing" target="_blank">Resume</a>
                    </li>
            </ul> 
    )
}

export default SideNav;