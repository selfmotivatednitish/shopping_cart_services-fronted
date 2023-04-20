import axios from 'axios'
import React, { Component } from 'react'
import base_url from '../../api/bootapi'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default class Signup extends Component {

    constructor() {
        super()

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        console.log("submit button pressed")

        axios.post(`${base_url}/user/login`, this.state)
            .then(
                (response) => {
                    console.log(response.data)
                    toast.success("Signin SuccessFull")
                },
                (error) => {
                    console.error(error)
                    toast.error("Something went wrong")
                }
            )

        event.preventDefault()
    }


    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }


    render() {
        return (
            <main>
                <div className='container'>

                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <h1 className="text-center">Signin form</h1>
                        <hr />
                        <div className="row justify-content-center">
                            <div className="col-6 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input required type="email" className="form-control" id="email" onChange={(event) => this.handleEmailChange(event)} />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-6 mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input required type="password" className="form-control" id="password" onChange={(event) => this.handlePasswordChange(event)} />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-2">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </main>
        )
    }
}