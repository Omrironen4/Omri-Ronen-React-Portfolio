import React from 'react';

export default function AboutMe() {
    return (
        <main>
            {/* <!-- 3rd row --> */}
        <div className="row">
            <div className="center col s12 m12 l12">
                <p className="title" id="aboutme">
                    About me</p>
            </div>
        </div>
        {/* <!-- 4th row --> */}
        <div className="row">
            <div className="col s12 m12 l12">
                <p className="about-me-par"> Hello, my
                    name is Omri! I am a full
                    stack web devleoper with a
                    deep a passion for science,
                    and a deep connection with
                    nature. I strive to do my
                    best, to continuosly learn,
                    and to build myself as a
                    better person.
                </p>
            </div>
        </div>
        </main>
    );
}