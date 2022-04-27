import React from 'react';
// import HeadShot from '../../Assets/Images/HeadShot.jpg'
import shorthairme from '../../Assets/Images/shorthairme.png'
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

                <div className="col s12 m12 l12 center-align">
                    <img className="headshot" alt="" src={shorthairme}></img>
                </div>

                <div className="col s12 m12 l12">
                    <div className='container'>
                        <p className="about-me-par techFont"> Hello, my name is Omri and I am a full stack web developer with a deep passion for science and a strong connection with nature. I graduated with a Bachelor's degree in Health Administration in 2020 from the University of Hawaii. During my undergraduate years I studied science, math, and business. Once Covid-19 hit, I began reshaping my career path and started studying web development in a coding boot camp which I found to be exciting and fun. In August 2021 I graduated with a Full-Stack Web Development Certification from the University of California in Irvine. The boot camp was a 6 month program of continuous hands on coding in both front-end and back-end technologies. Since then, I created many progressive and responsive web applications with cutting edge technologies and learned the ins and outs of building applications from scratch. Today I feel ready to begin my journey as a web developer in a company where I can expend my skills and contribute to its success.
                        </p>
                    </div>
                    <br></br>
                    <p className="about-me-par center-align techFont"> Here are the major technologies and languages I work with:</p>

                </div>

                <div className="col s12 m12 l12 center-align">
                    <li className="techFont">HTML + CSS</li>
                    <li className="techFont">JavaScript</li>
                    <li className="techFont">Node.js</li>
                    <li className="techFont">MongoDB</li>
                    <li className="techFont">MySQL</li>
                    <li className="techFont">Mongoose</li>
                    <li className="techFont">Sequelize</li>
                    <li className="techFont">Express</li>
                    <li className="techFont">jQuery</li>
                    <li className="techFont">Bootstrap + Materialize</li>
                </div>

            </div>
        </main>
    );
}