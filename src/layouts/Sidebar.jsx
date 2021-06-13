import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Sidebar() {
    return (
        <div>
            <Menu pointing secondary vertical>
                <Menu.Item
                    name='home'
               
                />
                <Menu.Item
                    name='messages'
                  
                />
                <Menu.Item
                    name='friends'
             
                />
            </Menu>
        </div>
    )
}
