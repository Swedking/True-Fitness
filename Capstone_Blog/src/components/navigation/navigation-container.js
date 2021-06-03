import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import image from "../../../Images/logo.png"
export default class NavigationComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="nav-wrapper">
                <div className="nav-logo">
                    <img src= {image} alt="logo"/>
                </div>

                <div className="right-nav-wrapper">
                    <div className='nav-link-active'>
                        <NavLink exact to='/'>
                            Home
                        </NavLink>
                    </div>

                    <div className='nav-link-active'>
                        <NavLink  to='/fitness'>
                            Fitness
                        </NavLink>
                    </div>

                    <div className='nav-link-active'>
                        <NavLink  to='/inspiration'>
                            Inspiration
                        </NavLink>
                    </div>

                    <div className='nav-link-active'>
                        <NavLink  to='/nutrition'>
                            Nutrition
                        </NavLink>
                    </div>

                    <div className='nav-link-active'>
                        <NavLink  to='/about'>
                            About
                        </NavLink>
                    </div>
                </div>

            </div>
        )
    }
}  