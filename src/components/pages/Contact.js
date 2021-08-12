import React from 'react';

export default function Contact() {
    return (
        // <!-- 1st row -->
        <main>
            <div className="row">
            <div className="center col s12 m12 l12">
                <p className="title" id="contact">
                    Contact me</p>
            </div>
        </div>
        {/* <!-- 2nd row --> */}
        <div className="row">
            <div className="center col s12 m12 l12">
                <ul className="contact-info">
                    <li>Name: Omri Ronen</li>
                    <li>Email: <a
                            className="email-color"
                            href="mailto:omri.ronen4@gmail.com">
                            omri.ronen4@gmail.com</a>
                    </li>
                    <li>Phone: (949)-910-7806</li>
                </ul>
            </div>
        </div>
        </main>
    );
}


