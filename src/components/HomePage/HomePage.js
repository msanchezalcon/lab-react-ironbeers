import React from 'react'
import { Link } from 'react-router-dom'


const HomePage = () => {
    return (
        <>
            <div className="homeSection">
                <Link to="/beers">All Beers</Link>
                <p>Blabla</p>

            </div>

            <div className="homeSection">
                <Link to="/random-beer">Random Beer</Link>
                <p>Blabla</p>
            </div>

            <div className="homeSection">
                <Link to="/new-beer">New Beer</Link>
                <p>Blabla</p>

            </div>

        </>

    )
}

export default HomePage