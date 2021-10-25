import React from 'react';

const Footer = () => {
    return (
        <main>

            <footer id="footinfo" className="page-footer">
                <div className="container">
                    <div className="row">

                        <div className="col l4 offset-l2 s12">
                            <ul className="left">
                                <li><a className="grey-text text-lighten-3"
                                    href="https://github.com/Omrironen4" target="_blank">GitHub</a>
                                </li>
                                <li><a className="grey-text text-lighten-3"
                                    href="https://www.linkedin.com/in/omri-ronen-a72766206/" target="_blank">LinkedIn
                                </a></li>
                                <li><a className="grey-text text-lighten-3"
                                    href="https://drive.google.com/file/d/1T88QlZ5yoSVTPHK4pNCl71S49QRCPu0k/view?usp=sharing" download target="_blank">Resume
                                </a></li>


                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default Footer;