import React, { Component } from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import Singup from './Singup'
import Login from './Login'
export default function Navi() {
    return (
        <div>
            <Menu inverted size='small'>

                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />
                    <Menu.Menu position='right'>
                        <Singup/>
                        <Menu.Item>
                        <Login/>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
