import React, { Component } from 'react';
import{ Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Tabs.components.css'

export class TabsComponent extends Component {
    constructor(props) {
        super(props)
    }

    
    render() {
         return (
         <>
            <div className="container">
                <Tabs className='tab-container'>
                    <TabList className="tab-nav">
                        <Tab className="tab first">Hello</Tab>
                        <Tab className="tab">Skills</Tab>
                        <Tab className="tab">Social</Tab>
                    </TabList>

                    <TabPanel className="tab-contents">
                        <h2>ELo</h2>
                    </TabPanel>
                    <TabPanel className="tab-contents">
                        hahaha
                    </TabPanel>

                </Tabs>
            </div>

         </>
        )
        

    }
}
