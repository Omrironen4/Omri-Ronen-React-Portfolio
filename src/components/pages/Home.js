import React from 'react';
import kauaiPic from '../../Assets/Images/kauai-pic.jpg';

export default function Home() {
    return (
        <main>
            <div>
            <div className="intro-image">
                <img className="responsive-img"
                    src={kauaiPic} />
            </div>
            <h5 className="brand-logo welcome">Welcome
                to my portfolio</h5>
        </div>
        </main>
    );
}
