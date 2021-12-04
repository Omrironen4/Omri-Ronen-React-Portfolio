import React from 'react';
import makeitbuyitcoverpage from '../../Assets/Images/makeitbuyitcoverpage.png';
import notetaker from '../../Assets/Images/notetaker.png';
import petconnect from '../../Assets/Images/petconnect.png';
import weatherapp from '../../Assets/Images/weatherapp.png';
import workday from '../../Assets/Images/workday.png';
import workouttracker from '../../Assets/Images/workouttracker.png';

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

            <div className='container'>
                {/* <!-- Beginning of 1st project row--> */}
                <div className='row'>
                    <div className='col s12 m6 l6'>
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" alt='makeit\buyit' src={makeitbuyitcoverpage} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Make it |
                                    Buy it<i className="material-icons right">more_vert</i></span>
                                <p><a target='_blank'  rel="noreferrer" href="https://omrironen4.github.io/Make-it-Buy-it/">Link to App</a></p>
                                <p><a target='_blank' rel="noreferrer" href="https://github.com/Omrironen4/Make-it-Buy-it">Link to Github</a></p>
                            </div>
                            <div className="card-reveal" >
                                <span className="card-title grey-text text-darken-4">Description<i className="material-icons right">close</i></span>
                                <p className='card-description'>The Make it / Buy It application is designed to help users who need help with deciding on their next meal. If a user decides to “Make It,” they will navigate to a page that will pull up recipes based on ingredients that the user wants to use. On the other hand, if the user decides to “Buy It,” they will navigate to a page that will pull up restaurants based on a location the user chooses.
                                
                                Technologies Used: HTML5, CSS3, JavaScript, Materialize CSS, Yelp API, Spoonacular API.</p>
                            </div>
                        </div>
                    </div>
                    {/* card2 */}
                    <div className='col s12 m6 l6'>
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" alt='weatherapp' rel="noreferrer" src={weatherapp} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Weather
                                    Application<i className="material-icons right">more_vert</i></span>
                                <p><a target='_blank' rel="noreferrer" href="https://omrironen4.github.io/weather-dashboard/">Link to App</a></p>
                                <p><a target='_blank' rel="noreferrer" href="https://github.com/Omrironen4/weather-dashboard">Link to Github</a></p>
                            </div>
                            <div className="card-reveal" >
                                <span className="card-title grey-text text-darken-4">Description<i className="material-icons right">close</i></span>
                                <p className='card-description'>This application provides the weather forecast to many cities around the world. Search in the search bar for your city, and see the 5 day weather forcast, including today. UV index is color coded from green to red ranking the severity of the uv ray danger. Hopefully you enjoy using this application!</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Beginning of 2nd project row--> */}
                <div className='row'>
                    <div className='col s12 m6 l6'>
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" alt='petconnect' src={petconnect} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Pet Connect<i className="material-icons right">more_vert</i></span>
                                <p><a target='_blank' rel="noreferrer" href="https://project-2-pet-connect.herokuapp.com/">Link to App</a></p>
                                <p><a target='_blank' rel="noreferrer" href="https://github.com/Omrironen4/Pet-Connect">Link to Github</a></p>
                            </div>
                            <div className="card-reveal" >
                                <span className="card-title grey-text text-darken-4">Description<i className="material-icons right">close</i></span>
                                <p className='card-description'>Pet Connect is a social media application that is designed to connect pet owners. Users can create posts to plan dog walks with others, get potty training lessons, provide product information, and ask questions from other pet owners. If they’re lucky, they can even find soulmates for their pets.</p>
                            </div>
                        </div>
                    </div>
                    {/* card2 */}
                    <div className='col s12 m6 l6'>
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" alt='workout tracker' src={workouttracker} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Workout Tracker<i className="material-icons right">more_vert</i></span>
                                <p><a target='_blank' rel="noreferrer" href="https://oms-workout-tracker.herokuapp.com/">Link to App</a></p>
                                <p><a target='_blank' rel="noreferrer" href="https://github.com/Omrironen4/workout-tracker">Link to Github</a></p>
                            </div>
                            <div className="card-reveal" >
                                <span className="card-title grey-text text-darken-4">Description<i className="material-icons right">close</i></span>
                                <p className='card-description'>The workout tracker application lets users create a workout based on either resistance or cardio. Once the user inputs their workout data, a neat graph is made based on the results!</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Beginning of 3rd project row--> */}
                <div className='row'>
                    <div className='col s12 m6 l6'>
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" alt='workday scheduler' src={workday} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Workday Scheduler<i className="material-icons right">more_vert</i></span>
                                <p><a target='_blank' rel="noreferrer" href="https://omrironen4.github.io/Work-day-scheduler/">Link to App</a></p>
                                <p><a target='_blank' rel="noreferrer" href="https://github.com/Omrironen4/Work-day-scheduler">Link to Github</a></p>
                            </div>
                            <div className="card-reveal" >
                                <span className="card-title grey-text text-darken-4">Description<i className="material-icons right">close</i></span>
                                <p className='card-description'>The workday scheduler allows users to set their daily taks in an organized manner. The usage of local storage allows users to save their todos, so they can come back to check on their list!</p>
                            </div>
                        </div>
                    </div>
                    {/* card2 */}
                    <div className='col s12 m6 l6'>
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" alt='note taker' src={notetaker} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Note Taker<i className="material-icons right">more_vert</i></span>
                                <p><a target='_blank' rel="noreferrer" href="https://note-taker-04.herokuapp.com/">Link to App</a></p>
                                <p><a target='_blank' rel="noreferrer" href="https://github.com/Omrironen4/Note-Taker">Link to Github</a></p>
                            </div>
                            <div className="card-reveal" >
                                <span className="card-title grey-text text-darken-4">Description<i className="material-icons right">close</i></span>
                                <p className='card-description'>This application allows users to add notes, save them, and delete them too if needed. A great place to write things down and have them saved for later.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </main>
    )
}