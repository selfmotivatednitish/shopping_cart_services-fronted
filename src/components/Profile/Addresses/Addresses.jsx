import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import Address from './Address/Address'
import AuthContext from '../../Context/AuthProvider'

export default function Addresses() {
    
    const {user} = useContext(AuthContext)

    const addresses = user.addresses;

    return (
        <div className='justify-content-center'>
            <h3 className='text-end'>Your Addresses</h3>
            <Row className='justify-content-center' >
                {
                    addresses.map((address, index) => (
                        <Address key={index} address={address} />
                    ))
                }
            </Row>
        </div>
    )
}
