import React, { Component } from 'react';
import { formatTime } from '../../../utils/Dateutil';
import { StartmenuComponent } from '../StartMenu/Startmenu.components';
import './Footer.components.css';

export class FooterComponents extends Component {
    constructor() {
        super()
    
        this.state = {
            
        }
    }
    

    
    render() {
        return (
            <>
                <StartmenuComponent />
            <div className="footer">
                <div className="start-menu">
                <img src="./images/startLogo.svg" className="menu-icon" />
                <p className="start"> <strong> Start </strong> </p>
                </div>

                <div className="time">
                    <p> {formatTime(Date.now())} </p>
                </div>
            </div>
            </>
        )
    }
}
