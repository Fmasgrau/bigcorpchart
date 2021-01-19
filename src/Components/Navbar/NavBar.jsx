import React from 'react'
import './NavBar.css'
import logo from './images/glide-logo-white.png'
import { Button, makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    customButton: {
        color: 'white',
        fontSize: '15px',
        fontWeight: 'bold',
        background: '#0B8FA6', 
        textTransform: 'capitalize',
        '&:hover' : {
            background: '#0B8FA6'
        }
    },
}));

export default function NavBar() {

    const classes = useStyles();


    return (
      
        <nav>
            <img src={logo} alt="glide-logo"></img>
            <ul>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">Attend Webinar</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Login</a></li>
            </ul>
            <Button variant="contained" color="secondary" size="large" className={classes.customButton}>Get Started</Button>
        </nav>
       
    )
}
