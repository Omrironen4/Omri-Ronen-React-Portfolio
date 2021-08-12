import React from 'react';
import buyIt from '../../Assets/Images/buyit.png';
import MakeIt from '../../Assets/Images/makeit.png';
import weatherApp from '../../Assets/Images/weatherapp.png';
import petConnect from '../../Assets/Images/petconnect.png';


export default function MyWork() {
    return (
        <main>
            {/* <!-- 5th row --> */}
            <div class="row">
                <div class="center col s12 m12 l12">
                    <p class="title" id="mywork">My
                        work</p>
                </div>
            </div>
            {/* <!-- 6th row --> */}
            <div class="row">
                <div class="col s12 m6 l6">
                    <i class="material-icons">filter_list</i>
                    <p class="project-title">Make it |
                        Buy it</p>
                </div>
            </div>
            {/* <!-- row --> */}
            <div class="row">
                <div class="col s6 m6 l6">
                    <a href="https://omrironen4.github.io/project-1/" target="_blank">Link to application</a>
                </div>
            </div>
            {/* <!-- 7th row --> */}
            <div class="row">
                <div class="col s12 m8 l8">
                    <p class="project-des">An
                        application that helps users
                        choose between making food or
                        buying food.</p>
                </div>
            </div>




            {/* <!-- 8th row make it & buy it card --> */}
            <div class="row">
                <div class="card small col s5 m4 l4">
                    <div
                        class="card-image waves-effect waves-block waves-light">
                        <img class="activator"
                            src={MakeIt} />
                    </div>
                    <div class="card-content">
                        <span
                            class="card-title activator grey-text text-darken-4">Make
                            it page<i
                                class="material-icons right">more_vert</i></span>
                        <p><i class="material-icons"><a
                            href="#https://iamalittleforest.github.io/project-1/makeit.html"></a>link</i>
                        </p>
                    </div>
                    <div class="card-reveal">
                        <span
                            class="card-title grey-text text-darken-4"><i
                                class="material-icons right">close</i></span>
                        <p class="info">Enter your
                            ingredients separated by a
                            comma, and find some
                            amazing recipes!</p>
                    </div>
                </div>

                <div class="card small col s5 m4 l4">
                    <div
                        class="card-image waves-effect waves-block waves-light">
                        <img class="activator"
                            src={buyIt} />
                    </div>
                    <div class="card-content">
                        <span
                            class="card-title activator grey-text text-darken-4">Buy
                            it page<i
                                class="material-icons right">more_vert</i></span>
                        <p><i class="material-icons"><a
                            class="link"
                            href="https://iamalittleforest.github.io/project-1/buyit.html"></a>link</i>
                        </p>
                    </div>
                    <div class="card-reveal">
                        <span
                            class="card-title grey-text text-darken-4"><i
                                class="material-icons right">close</i></span>
                        <p class="info">Search for
                            restaurants near you by
                            typing in your city!</p>
                    </div>
                </div>
            </div>



            {/* <!-- 9th row --> */}
            <div class="row">
                <div class="col s12 m6 l6">
                    <i class="material-icons">filter_list</i>
                    <p class="project-title">Weather
                        Application</p>
                </div>
            </div>
            {/* <!-- row --> */}
            <div class="row">
                <div class="col s6 m6 l6">
                    <a href="https://omrironen4.github.io/weather-dashboard-homework-6/" target="_blank">Link to application</a>
                </div>
            </div>
            {/* <!-- 10th row --> */}
            <div class="row">
                <div class="col s12 m8 l8">
                    <p class="project-des">Weather
                        dashboard is an application
                        that allows users to check the
                        current weather in cities
                        around the world.</p>
                </div>
            </div>
            {/* <!-- 11th row --> */}
            <div class="row">
                <div class="card small col s8 m8 l8">
                    <div
                        class="card-image waves-effect waves-block waves-light">
                        <img class="activator"
                            src={weatherApp} />
                    </div>
                    <div class="card-content">
                        <span
                            class="card-title activator grey-text text-darken-4"><i
                                class="material-icons right">more_vert</i>
                        </span>
                        <p>
                            <i class="material-icons"><a
                                class="link"
                                href="https://omrironen4.github.io/weather-dashboard-homework-6/"></a>link</i>
                        </p>
                    </div>
                    <div class="card-reveal">
                        <span
                            class="card-title grey-text text-darken-4"><i
                                class="material-icons right">close</i></span>
                        <p class="info">In this
                            application, users can
                            check the weather based on
                            location by city - see the
                            5 day forcast in your
                            city!</p>
                    </div>
                </div>
            </div>
            {/* <!-- 12th row --> */}
            <div class="row">
                <div class="col s12 m6 l6">
                    <i class="material-icons">filter_list</i>
                    <p class="project-title">Pet Connect</p>
                </div>
            </div>
            {/* <!-- 13th row --> */}
            <div class="row">
                <div class="col s6 m6 l6">
                    <a href="https://project-2-pet-connect.herokuapp.com/" target="_blank">Link to application</a>
                </div>
            </div>
            {/* <!-- 14th row --> */}
            <div class="row">
                <div class="col s12 m8 l8">
                    <p class="project-des">Pet Connect is an application for pet owners around Orange County to chat and connect!</p>
                </div>
            </div>
            {/* <!-- 15th row --> */}
            <div class="row">
                <div class="card small col s8 m8 l8">
                    <div
                        class="card-image waves-effect waves-block waves-light">
                        <img class="activator"
                            src={petConnect} />
                    </div>
                    <div class="card-content">
                        <span
                            class="card-title activator grey-text text-darken-4"><i
                                class="material-icons right">more_vert</i>
                        </span>
                        <p>
                            <i class="material-icons"><a
                                class="link"
                                href="https://project-2-pet-connect.herokuapp.com/"></a>link</i>
                        </p>
                    </div>
                    <div class="card-reveal">
                        <span
                            class="card-title grey-text text-darken-4"><i
                                class="material-icons right">close</i></span>
                        <p class="info">This application is designed to connect pet owners in the Orange County area - with the ability to share information and also meet. Users can
                            create an accout for themselves and their pets. In this CMS style application users can create blog posts, comment on posts, remove/update posts, and more! </p>
                    </div>
                </div>
            </div>

        </main>
    )
}