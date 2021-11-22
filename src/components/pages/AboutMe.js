import React from 'react';
import HeadShot from '../../Assets/Images/HeadShot.jpg'
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
                    <img className="headshot" alt="" src={HeadShot}></img>
                </div>

                <div className="col s12 m12 l12">
                    <div className='container'>
                        <p className="about-me-par techFont"> Hello, my
                            name is Omri! I am a full
                            stack web devleoper with a
                            deep a passion for science,
                            and a deep connection with
                            nature. I graduated with a Bachelor's degree in Health Administration in 2020. During the years of my Bachelor's degree I studied various kinds of sciences, math, and business related courses. 
                            Once Covid-19 spread around the world, I began to reshape my career path. My goal was to work in an industry with a growing employment rate and high demand. Through my peer's advice, I began studying web development and loved it. Shortly after I signed up for a coding bootcamp.
                            Now, I am a recent coding bootcamp graduate from the University of California in Irvine. The bootcamp was 6 months of continuous hands on coding in both front-end and back-end technologies. I created many progressive and responsive web applications with cutting edge technologies. I learned the ins and outs of building applications from scratch, and now I feel ready to begin my journey with a company that allows me to grow and perform.

                        </p>
                    </div>
                    <br></br>
                    <p className="about-me-par center-align techFont"> Here are the major technologies and languages I work with!</p>

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