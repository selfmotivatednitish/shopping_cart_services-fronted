import React from 'react'
import { Accordion } from 'react-bootstrap'
import Order from './Order/Order'

export default function Orders() {
    return (
        <div className='justify-content-center'>
            <h3 className='text-end'>Your Orders</h3>
            <Accordion>
                <Order eventKey="0" />
                <Order eventKey="1" />
                <Order eventKey="2" />
                <Order eventKey="3" />
            </Accordion>
        </div>
    )
}
