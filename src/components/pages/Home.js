import React from "react"


function Home() {
    return (
        <div className="media" style={{ margin: "10% 10%" }}>
            <img src="./MyPicture.jpg" className="align-self-start mr-3 fluid" alt="Mohamed Salih" />

            <div className="media-body">
                <h5 className="mt-0">About Me</h5>
                <p>I am a web designer and I love creating websites. I make beautiful websites that look great on
                        all your devices using the latest technologies available.</p>
            </div>
        </div>
    )

}

export default Home