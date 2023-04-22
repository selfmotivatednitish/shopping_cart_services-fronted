import React, { useContext, useState } from 'react'
import { Card } from 'react-bootstrap'
import AuthContext from '../../../Context/AuthProvider'

export default function Address({ address }) {
    const { user } = useContext(AuthContext)

    const [edit, setEdit] = useState(false)

    const addressEditHandle = () => {
        setEdit(true)
    }

    return (
        <Card className='m-2 text-start' style={{ width: '18rem' }}>
            <Card.Body style={{ display: !edit ? "block" : "none" }}>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.phone}</Card.Subtitle>
                <Card.Text>
                    {address.street}, {address.city}, {address.state}
                </Card.Text>
                <Card.Text>
                    {address.pincode}
                </Card.Text>
                <Card.Link onClick={addressEditHandle} >Edit</Card.Link>
                <Card.Link >Remove</Card.Link>
            </Card.Body>
        </Card>
    )
}
