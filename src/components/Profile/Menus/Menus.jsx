import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function Menus() {
    return (
        <ListGroup as="ul">
            <LinkContainer to='/profile'>
                <ListGroup.Item variant="info" action as="li">
                    Login & security
                </ListGroup.Item>
            </LinkContainer>
            <LinkContainer to='/profile/addresses'>
                <ListGroup.Item variant="info" action as="li">
                    Your Addresses
                </ListGroup.Item>
            </LinkContainer>
            <LinkContainer to='/profile/orders'>
                <ListGroup.Item variant="info" action as="li">
                    Your Orders
                </ListGroup.Item>
            </LinkContainer>
            <LinkContainer to='/contactus'>
                <ListGroup.Item variant="info" action as="li">
                    Contact Us
                </ListGroup.Item>
            </LinkContainer>
        </ListGroup>
    )
}
