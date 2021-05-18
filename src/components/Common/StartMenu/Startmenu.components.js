import React, { Component } from 'react';
import './Startmenu.components.css';

export class StartmenuComponent extends Component {
    render() {
        return (
            <>
                <div className="menu-content">
                    <div className="side-menu">
                       <h2 className="name"> Sulav </h2>
                    </div>
                    <div className="content-menu">
                        <span>
                            <img className="icons" src="./images/computerIcon.svg" alt="images.png"></img>
                            About Me
                        </span>

                        <span>
                            Home
                        </span>

                        <span>
                            Blog
                        </span>

                        <span>
                            Others
                        </span>

                        <span>
                            Others
                        </span>

                        <span>
                            Others
                        </span>

                        <span>
                            Others
                        </span>

                        <span>
                            Others
                        </span>
                    </div>
                </div>
            </>
        )
    }
}
