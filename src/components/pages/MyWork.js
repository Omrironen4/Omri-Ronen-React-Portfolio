import React from 'react';
import buyIt from '../../Assets/Images/buyit.png';
import MakeIt from '../../Assets/Images/makeit.png';
import weatherApp from '../../Assets/Images/weatherapp.png';
import petConnect from '../../Assets/Images/petconnect.png';
import noteTaker from '../../Assets/Images/notetaker.png';
import workoutTracker from '../../Assets/Images/workout.png';
import budgetTracker from '../../Assets/Images/budget.png';
export default function MyWork() {
    return (
        <main>
            {/* <!-- 5th row --> */}
            <div className="row">
                <div className="center col s12 m12 l12">
                    <p className="title" id="mywork">My
                        work</p>
                </div>
            </div>
            {/* <!-- 6th row --> */}
            <div className="row">
                <div className="col s12 m6 l6">
                    <i className="material-icons">filter_list</i>
                    <p className="project-title">Make it |
                        Buy it</p>
                </div>
            </div>
            {/* <!-- row --> */}
            <div className="row">
                <div className="col s6 m6 l6">
                    <a href="https://omrironen4.github.io/Make-it-Buy-it/" target="_blank" rel="noreferrer">Go to application</a>
                </div>
            </div>
            {/* <!-- 7th row --> */}
            <div className="row">
                <div className="col s12 m8 l8">
                    <p className="project-des techFont">An
                        application that helps users
                        choose between making food or
                        buying food.</p>
                </div>
            </div>




            {/* <!-- 8th row make it & buy it card --> */}
            <div className="row">
                <div className="card small col s5 m4 l4">
                    <div
                        className="card-image waves-effect waves-block waves-light">
                        <img className="activator" alt="Make it picture"
                            src={MakeIt} />
                    </div>
                    <div className="card-content">
                        <span
                            className="card-title activator grey-text text-darken-4">Make
                            it page<i
                                className="material-icons right">more_vert</i></span>
                        <p><i className="material-icons"><a
                            href="#https://iamalittleforest.github.io/project-1/makeit.html"></a>link</i>
                        </p>
                    </div>
                    <div className="card-reveal">
                        <span
                            className="card-title grey-text text-darken-4"><i
                                className="material-icons right">close</i></span>
                        <p className="info">Enter your
                            ingredients separated by a
                            comma, and find some
                            amazing recipes!</p>
                    </div>
                </div>

                <div className="card small col s5 m4 l4">
                    <div
                        className="card-image waves-effect waves-block waves-light">
                        <img className="activator" alt="Buy it image"
                            src={buyIt} />
                    </div>
                    <div className="card-content">
                        <span
                            className="card-title activator grey-text text-darken-4">Buy
                            it page<i
                                className="material-icons right">more_vert</i></span>
                        <p><i className="material-icons"><a
                            className="link"
                            href="https://iamalittleforest.github.io/project-1/buyit.html"></a>link</i>
                        </p>
                    </div>
                    <div className="card-reveal">
                        <span
                            className="card-title grey-text text-darken-4"><i
                                className="material-icons right">close</i></span>
                        <p className="info">Search for
                            restaurants near you by
                            typing in your city!</p>
                    </div>
                </div>
            </div>



            {/* <!-- 9th row --> */}
            <div className="row">
                <div className="col s12 m6 l6">
                    <i className="material-icons">filter_list</i>
                    <p className="project-title">Weather
                        Application</p>
                </div>
            </div>
            {/* <!-- row --> */}
            <div className="row">
                <div className="col s6 m6 l6">
                    <a href="https://omrironen4.github.io/weather-dashboard/" target="_blank" rel="noreferrer">Go to application</a>
                </div>
            </div>
            {/* <!-- 10th row --> */}
            <div className="row">
                <div className="col s12 m8 l8">
                    <p className="project-des techFont">Weather
                        dashboard is an application
                        that allows users to check the
                        current weather in cities
                        around the world.</p>
                </div>
            </div>
            {/* <!-- 11th row --> */}
            <div className="row">
                <div className="card small col s8 m8 l8">
                    <div
                        className="card-image waves-effect waves-block waves-light">
                        <img className="activator" alt="Weather app picture"
                            src={weatherApp} />
                    </div>
                    <div className="card-content">
                        <span
                            className="card-title activator grey-text text-darken-4"><i
                                className="material-icons right">more_vert</i>
                        </span>
                        <p>
                            <i className="material-icons"><a
                                className="link"
                                href="https://omrironen4.github.io/weather-dashboard-homework-6/"></a>link</i>
                        </p>
                    </div>
                    <div className="card-reveal">
                        <span
                            className="card-title grey-text text-darken-4"><i
                                className="material-icons right">close</i></span>
                        <p className="info">In this
                            application, users can
                            check the weather based on
                            location by city - see the
                            5 day forcast in your
                            city!</p>
                    </div>
                </div>
            </div>
            {/* <!-- 12th row --> */}
            <div className="row">
                <div className="col s12 m6 l6">
                    <i className="material-icons">filter_list</i>
                    <p className="project-title">Pet Connect</p>
                </div>
            </div>
            {/* <!-- 13th row --> */}
            <div className="row">
                <div className="col s6 m6 l6">
                    <a href="https://project-2-pet-connect.herokuapp.com/" target="_blank">Go to application</a>
                </div>
            </div>
            {/* <!-- 14th row --> */}
            <div className="row">
                <div className="col s12 m8 l8">
                    <p className="project-des techFont">Pet Connect is an application for pet owners around Orange County to chat and connect!</p>
                </div>
            </div>
            {/* <!-- 15th row --> */}
            <div className="row">
                <div className="card small col s8 m8 l8">
                    <div
                        className="card-image waves-effect waves-block waves-light">
                        <img className="activator" alt="Pet connect application image"
                            src={petConnect} />
                    </div>
                    <div className="card-content">
                        <span
                            className="card-title activator grey-text text-darken-4"><i
                                className="material-icons right">more_vert</i>
                        </span>
                        <p>
                            <i className="material-icons"><a
                                className="link"
                                href="https://project-2-pet-connect.herokuapp.com/"></a>link</i>
                        </p>
                    </div>
                    <div className="card-reveal">
                        <span
                            className="card-title grey-text text-darken-4"><i
                                className="material-icons right">close</i></span>
                        <p className="info">This application is designed to connect pet owners in the Orange County area - with the ability to share information and also meet. Users can
                            create an accout for themselves and their pets. In this CMS style application users can create blog posts, comment on posts, remove/update posts, and more! </p>
                    </div>
                </div>
            </div>

            {/* <!-- 16th row --> */}
            <div className="row">
                <div className="col s12 m6 l6">
                    <i className="material-icons">filter_list</i>
                    <p className="project-title">Note Taker</p>
                </div>
            </div>
            {/* <!-- 17th row --> */}
            <div className="row">
                <div className="col s6 m6 l6">
                    <a href="https://note-taker-04.herokuapp.com/" target="_blank" rel="noreferrer">Go to application</a>
                </div>
            </div>
            {/* <!-- 18th row --> */}
            <div className="row">
                <div className="col s12 m8 l8">
                    <p className="project-des techFont">Note Taker is an application that allows users to create, edit, and remove notes. This is a great place to store notes for just about anything. </p>
                </div>
            </div>
            {/* <!-- 19th row --> */}
            <div className="row">
                <div className="card small col s8 m8 l8">
                    <div
                        className="card-image waves-effect waves-block waves-light">
                        <img className="activator" alt="Note taker application picture"
                            src={noteTaker} />
                    </div>
                    <div className="card-content">
                        <span
                            className="card-title activator grey-text text-darken-4"><i
                                className="material-icons right">more_vert</i>
                        </span>
                        <p>
                            <i className="material-icons"><a
                                className="link"
                                href="https://project-2-pet-connect.herokuapp.com/"></a>link</i>
                        </p>
                    </div>
                    <div className="card-reveal">
                        <span
                            className="card-title grey-text text-darken-4"><i
                                className="material-icons right">close</i></span>
                        <p className="info">In this application I helped create a note taker using Node.js and Express.js. The front end code was given, while the back-end code was not. This application allows users to add notes, save them, and delete them too if needed. I linked up back-end code to work with the front end and deployed this application on Heroku. </p>
                    </div>
                </div>
            </div>

            {/* <!-- 16th row --> */}
            <div className="row">
                <div className="col s12 m6 l6">
                    <i className="material-icons">filter_list</i>
                    <p className="project-title">Workout Tracker</p>
                </div>
            </div>
            {/* <!-- 17th row --> */}
            <div className="row">
                <div className="col s6 m6 l6">
                    <a href="https://oms-workout-tracker.herokuapp.com/" target="_blank" rel="noreferrer">Go to application</a>
                </div>
            </div>
            {/* <!-- 18th row --> */}
            <div className="row">
                <div className="col s12 m8 l8">
                    <p className="project-des techFont">Workout Tracker is an application that helps users keep track of their workouts. Users can enter the type of workout, such as resitance or cardio. Detailed graphs are made based on the inputs.</p>
                </div>
            </div>
            {/* <!-- 19th row --> */}
            <div className="row">
                <div className="card small col s8 m8 l8">
                    <div
                        className="card-image waves-effect waves-block waves-light">
                        <img className="activator" alt="workout tracker application image"
                            src={workoutTracker} />
                    </div>
                    <div className="card-content">
                        <span
                            className="card-title activator grey-text text-darken-4"><i
                                className="material-icons right">more_vert</i>
                        </span>
                        <p>
                            <i className="material-icons"><a
                                className="link"
                                href="https://project-2-pet-connect.herokuapp.com/"></a>link</i>
                        </p>
                    </div>
                    <div className="card-reveal">
                        <span
                            className="card-title grey-text text-darken-4"><i
                                className="material-icons right">close</i></span>
                        <p className="info">Great application for those who exercise either in cardio or resistance!</p>
                    </div>
                </div>
            </div>

            {/* NEW NEW */}
            {/* <!-- 16th row --> */}
            <div className="row">
                <div className="col s12 m6 l6">
                    <i className="material-icons">filter_list</i>
                    <p className="project-title">Budget Tracker</p>
                </div>
            </div>
            {/* <!-- 17th row --> */}
            <div className="row">
                <div className="col s6 m6 l6">
                    <a href="https://budget-tracker-omri.herokuapp.com/" target="_blank">Go to application</a>
                </div>
            </div>
            {/* <!-- 18th row --> */}
            <div className="row">
                <div className="col s12 m8 l8">
                    <p className="project-des techFont">Budge Tracker is an application that helps users keep track of their financial activities. Users can enter their expenses and incomes and in return a chart will display their activity.</p>
                </div>
            </div>
            {/* <!-- 19th row --> */}
            <div className="row">
                <div className="card small col s8 m8 l8">
                    <div
                        className="card-image waves-effect waves-block waves-light">
                        <img className="activator" alt="budget traker application image"
                            src={budgetTracker} />
                    </div>
                    <div className="card-content">
                        <span
                            className="card-title activator grey-text text-darken-4"><i
                                className="material-icons right">more_vert</i>
                        </span>
                        <p>
                            <i className="material-icons"><a
                                className="link"
                                href="https://project-2-pet-connect.herokuapp.com/"></a>link</i>
                        </p>
                    </div>
                    <div className="card-reveal">
                        <span
                            className="card-title grey-text text-darken-4"><i
                                className="material-icons right">close</i></span>
                        <p className="info">Great application for those who have small expenses to keep track of!</p>
                    </div>
                </div>
            </div>
            {/* NEW FINISH */}
        </main>
    )
}