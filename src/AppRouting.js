import React from 'react'
import { FooterComponents } from './components/Common/Footer/Footer.components'
import { DesktopComponent } from './components/Desktop/Desktop.components'
import { HomeComponents } from './components/Home/Home.components'
import { TabsComponent } from './components/Tabs/Tabs.components'

export const AppRouting = () => {
    return (
        <>
        <DesktopComponent />
            <FooterComponents />
            <HomeComponents />
        </>
    )
}
