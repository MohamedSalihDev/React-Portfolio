import React from "react"

function Portfolio() {
    return (

        <div className="row row-cols-1 row-cols-md-2" style={{ margin: "10% 10%" }}>
            <div className="col mb-4">
                <div className="card">
                    <a href="https://giteatz2020.herokuapp.com/" target="blank"><img src="./public/recipe.jpg"
                        className="card-img-top" alt="superheroes" /></a>
                    <div className="card-body">
                        <h5 className="card-title">Git Eatz</h5>
                        <p className="card-text">Look up your favorite recipes here.</p>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <a href="https://zackariahshone.github.io/marvilousQuiz/index.html" target="blank"><img
                        src={window.location.origin + "./public/superheroes.jpg"} className="card-img-top" alt="superheroes" /></a>
                    <div className="card-body">
                        <h5 className="card-title">Superhero Quiz</h5>
                        <p className="card-text">Test your superhero knowledge with the funny quiz app.</p>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <a href="https://mohamedsalihdev.github.io/Weather-Dashboard/" target="blank"> <img
                        src="./public/weather.png" className="card-img-top" alt="weather dashboard" /></a>
                    <div className="card-body">
                        <h5 className="card-title">Weather Dashboard</h5>
                        <p className="card-text">Check the weather with this app.</p>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <a href="https://mohamedsalihdev.github.io/Personal-Day-Planner/" target="blank"><img
                        src="./public/personaldayplanner.jpg" className="card-img-top" alt="personal day planner" /></a>
                    <div className="card-body">
                        <h5 className="card-title">Personal Day Planner</h5>
                        <p className="card-text">Organize your day with this planner.</p>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <a href="https://mohamedsalihdev.github.io/Javascript-Quiz/" target="blank"> <img
                        src="./public/javascriptquiz.jpg" className="card-img-top" alt="javascript quiz" /></a>
                    <div className="card-body">
                        <h5 className="card-title">JavaScript Quiz </h5>
                        <p className="card-text">Test your JavaScript Knowledge witht this Quiz App</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Portfolio;