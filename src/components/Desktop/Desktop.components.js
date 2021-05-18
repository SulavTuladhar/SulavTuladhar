import React, { Component } from 'react';
import { TabsComponent } from '../Tabs/Tabs.components';
import './Desktop.components.css';

export class DesktopComponent extends Component {
    constructor() {
        super()
    
        this.state = {             
            details: true,
            diffX: 0,
            diffY: 0,
            dragging: false,
            styles: {}
        }
        
            this.dragStart = this.dragStart.bind(this);
            this.dragging = this.dragging.bind(this);
            this.dragEnd = this.dragEnd.bind(this);
            this.open = this.open.bind(this);
            this.close = this.close.bind(this);
    }

    dragStart(e){
        this.setState({
            diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
            diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
            dragging: true
        })
    }

    dragging(e){
        if(this.state.dragging){
            
            var left = e.screenX - this.state.diffX;
            var top = e.screenY - this.state.diffY;
    
            this.setState({
                styles: {
                    left: left,
                    top: top
                }
            })
        }
    }

    dragEnd(){
        this.setState({
            dragging: false
        })
    }

    open(){
        this.setState({
            details: true
        })
    }

    close(){
        this.setState({
            details: false
        })
    }

    render() {
        return (
            <div className="desktop">
                <div className="folder" onDoubleClick={this.open}>
                    <img src="./images/folder-img.png"></img>
                    <p className="folder-name"> Sulav.dev </p>
                </div>
                




                 {this.state.details === true && (
                  
                  <div 
                    className="my-details" 
                    style={this.state.styles} 
                    onMouseDown={this.dragStart} 
                    onMouseMove={this.dragging} 
                    onMouseUp={this.dragEnd}>

                <div className="close-bar">
                    <p className="header-text"> System Properties </p>
                    <div className="close-btn" onClick={this.close}>
                    <i className="fas fa-times close-icon"></i>
                    </div>
                </div>
                    
                <TabsComponent />

                <div className="buttons">
                    <div className="btn ok" onClick={this.close}>
                        <h5> Ok </h5>
                    </div>
                    <div className="btn" onClick={this.close}>
                        <h5> Cancel </h5>
                    </div>

                </div>

                </div>
                  
                )}
            </div>
        )
    }
}
