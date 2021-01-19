import React from 'react'
import NavBar from '../../Components/Navbar/NavBar'
import TeamChart from '../TeamChart/TeamChart'
import './Layout.css'

export default function Layout() {
    return (
        <div className="container">
            <header className="header">
                <NavBar></NavBar>
               
            </header>
            <main className="main">
                <div className="jumbotron">
                    <h1>Meet the Team</h1>
                    <h3>Our team is conformed by designers, accountants, programers, and more.</h3>
                </div>
                <div className="corpchart">
                    <TeamChart></TeamChart>
                </div>
            </main>
            <footer className="footer">

            </footer>
        </div>
    )
}
