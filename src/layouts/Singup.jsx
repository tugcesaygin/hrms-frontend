import React from 'react'
import { Dropdown } from 'semantic-ui-react'
export default function Signup() {
    return (
        <div>
            <Dropdown item text='Sign Up'>
                <Dropdown.Menu>
                    <Dropdown.Item>English</Dropdown.Item>
                    <Dropdown.Item>Russian</Dropdown.Item>
                    <Dropdown.Item>Spanish</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
