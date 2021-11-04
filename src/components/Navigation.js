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
                <a  className="sidenav-trigger"
                    data-target="mobile-links">
                    <i className="material-icons">menu</i>
                </a>
                <ul className="left hide-on-med-and-down">
                    <li>
                        <a className="middle active"
                            onClick={() => handlePageChange('Contact')}
                            href="#Contact">Contact

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
                            href="https://github.com/Omrironen4" target="_blank" rel="noreferrer">GitHub
                        </a>
                    </li>
                    <li>
                        <a className="middle"
                            href="https://www.linkedin.com/in/omri-ronen-a72766206/" target="_blank" rel="noreferrer">LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            className="middle" href="https://drive.google.com/file/d/106UkBzYzoWFOG0kt0m1K1aPvxABlSQDC/view?usp=sharing" target="_blank" rel="noreferrer">Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>



            );
}

            export default Navigation;