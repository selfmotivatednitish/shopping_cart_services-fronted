import React, { useContext, useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import Order from './Order/Order'
import AuthContext from '../../Context/AuthProvider'
import axios from 'axios'
import base_url from '../../../api/bootapi'

export default function Orders() {

    const { auth, user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        if (auth) {
            axios.get(`${base_url}/order/${user.id}/getOrders`)
                .then(
                    (response) => {
                        setOrders(response.data)
                    },
                    (error) => {
                        console.log(error)
                    }
                )
        }
    }, [auth, user.id])

    return (
        <div className='justify-content-center'>
            <h3 className='text-end'>Your Orders</h3>
            <Accordion>
                {orders.map((order, index) => (
                    <Order key={index} eventKey={index} order={order} />
                ))}
            </Accordion>
        </div>
    )
}
