import React from 'react';
const Navigation = ({ page, handlePageChange }) => {
    return (
        // nav desktop 

        <nav className="nav-wrapper">
            <div className="container">
                <a href="#home"
                    onClick={() => handlePageChange('Home')}
                    className="brand-logo right">Omri
                    Ronen
                </a>
                <a href="#" className="sidenav-trigger"
                    data-target="mobile-links">
                    <i className="material-icons">menu</i>
                </a>
                <ul className="left hide-on-med-and-down">
                    <li>
                        <a className="middle active"
                            onClick={() => handlePageChange('Contact')}
                            href="#">Contact

                        </a>
                    </li>
                    <li>
                        <a className="middle"
                            onClick={() => handlePageChange('About Me')}
                            href="#">About
                            Me
                        </a>
                    </li>
                    <li>
                        <a className="middle"
                            onClick={() => handlePageChange('My Work')}
                            href="#">My
                            Work
                        </a>
                    </li>
                    <li>
                        <a className="middle"
                            href="https://github.com/Omrironen4" target="_blank">GitHub
                        </a>
                    </li>
                    <li>
                        <a className="middle"
                            href="https://www.linkedin.com/in/omri-ronen-a72766206/" target="_blank">LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            className="middle" href="https://drive.google.com/file/d/1T88QlZ5yoSVTPHK4pNCl71S49QRCPu0k/view?usp=sharing" target="_blank">Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>



            );
}

            export default Navigation;