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
                        <p className="about-me-par techFont"> Hello
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