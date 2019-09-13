import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

export class Menu extends Component {
    render() {
        return <header>
                    <ul>
                        <li><NavLink to="/all-locations" style={{textDecoration: 'none'}}>View Locations</NavLink></li>
                        <li><NavLink to="/save-location" style={{textDecoration: 'none'}}>Save Locations</NavLink></li>
                    </ul>
                </header>
    }
}

export class Footer extends Component {
    render() {
        return <footer>HikingApp&copy; Robert McCutchen, 2019</footer>
    }
}

export class BaseLayout extends Component {
    render() {
        return (
                <div className="children">
                    <Menu/>
                    {this.props.children}
                    <Footer/>
                </div>
        ) 
    }
}