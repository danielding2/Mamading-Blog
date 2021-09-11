import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

interface Props {
    openForm: () => void;
}

export default function NavBar({openForm} : Props) {
    return (

            <Menu borderless pointing fixed='top' >
                <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Mama Ding's Kitchen
                </Menu.Item>
                <Menu.Item
                    name='Recipes'
                />
                <Menu.Item>
                    <Button onClick={openForm} positive content='Add Recipe'/>
                </Menu.Item>
                </Container>
            </Menu>

    )
}