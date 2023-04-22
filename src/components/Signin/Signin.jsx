import axios from 'axios'
import React, { useContext, useState } from 'react'
import base_url from '../../api/bootapi'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AuthContext from '../Context/AuthProvider'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function Signin() {

    const [login, setLogin] = useState({})

    const { setAuth, setUser, setCart } = useContext(AuthContext)

    const handleSubmit = (event) => {
        console.log("submit button pressed")
        console.log(login)

        axios.post(`${base_url}/user/login`, login)
            .then(
                (response) => {
                    setAuth(true)
                    setUser(response?.data)
                    setCart(response?.data?.cartItems)
                    toast.success("Signin SuccessFull")
                },
                (error) => {
                    console.error(error)
                    toast.error("Something went wrong")
                }
            )

        event.preventDefault()
    }

    return (
        <main>
            <div className='container'>

                <form onSubmit={(event) => handleSubmit(event)}>
                    <h1 className="text-center">Signin form</h1>
                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-6 mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input required type="email" className="form-control" id="email" onChange={(event) => setLogin({ ...login, email: event.target.value })} />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-6 mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input required type="password" className="form-control" id="password" onChange={(event) => setLogin({ ...login, password: event.target.value })} />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-2">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
                <button>
                    <LinkContainer to="/profile" >
                        <Button>Guest</Button>
                    </LinkContainer>
                </button>
            </div>
            <ToastContainer />
        </main>
    )
}