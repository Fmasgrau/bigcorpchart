import React from 'react'
import NavBar from '../../Components/Navbar/NavBar'
import TeamChart from '../TeamChart/TeamChart'
import './Layout.css'
import linkedinLogo from './images/linkedin.png'
import githubLogo from './images/github.png'

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
                <div className="footer-links">
                    <div className="github">
                        <img src={githubLogo} width="25" alt="githubLogo"></img>
                        <a href="https://github.com/Fmasgrau/bigcorpchart">Fmasgrau</a>
                    </div>
                    <div className="linkedin">
                        <img src={linkedinLogo} width="25" alt="LinkedinLogo"></img>
                        <a href="https://www.linkedin.com/in/facundo-masgrau-8a815641/?locale=en_US">Facundo Masgrau</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
