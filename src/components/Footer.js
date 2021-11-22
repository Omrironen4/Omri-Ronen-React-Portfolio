import React from 'react';

const Footer = () => {
    return (
        <main>
            <footer id="footinfo" className="page-footer">
                <div className='container'>
                    <div className="col l4 offset-l2 s12">
                        <ul className="left">
                            <li><a className="grey-text text-lighten-3"
                                href="https://github.com/Omrironen4" target="_blank" rel="noreferrer">GitHub</a>
                            </li>
                            <li><a className="grey-text text-lighten-3"
                                href="https://www.linkedin.com/in/omri-ronen-a72766206/" target="_blank" rel="noreferrer" >LinkedIn
                            </a></li>
                            <li><a className="grey-text text-lighten-3"
                                href="https://drive.google.com/file/d/106UkBzYzoWFOG0kt0m1K1aPvxABlSQDC/view?usp=sharing" download target="_blank" rel="noreferrer">Resume
                            </a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default Footer;




