import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default function NavBar() {

    const {appointmentStore } = useStore();
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                </Menu.Item>
                <Menu.Item name="Appointments" />
                <Menu.Item>
                    <Button onClick={() => appointmentStore.openForm()} color="yellow" content='Create Appointment'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}