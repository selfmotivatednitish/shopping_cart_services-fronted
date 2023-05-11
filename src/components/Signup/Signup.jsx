import axios from 'axios'
import React, { Component } from 'react'
import base_url from '../../api/bootapi'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default class Signup extends Component {

    constructor() {
        super()

        this.state = {
            fName: "",
            lName: "",
            email: "",
            password: "",
            confrimPassword: "",
            emailErrorMessage: "",
            passwordErrorMessage: "",
            confrimPasswordErrorMessage: "",
            disabled: "disabled",
            message: ""
        }
    }

    handleSubmit = (event) => {
        console.log("submit button pressed")

        let confErr = ""
        let passErr = ""

        let str = this.state.password
        let str1 = this.state.confrimPassword
        let len = str.length
        let numUpper = len - str.replace(/[A-Z]/g, '').length
        let numLower = len - str.replace(/[a-z]/g, '').length

        if (len < 8) passErr += "Pasword Must Contain at least 8 characters.\n"
        if (numUpper < 1) passErr += "Pasword Must Contain at least one capital letter.\n"
        if (numLower < 1) passErr += "Pasword Must Contain at least one small letter.\n"

        if (str !== str1) confErr += "Pasword should match.\n"

        this.setState({
            passwordErrorMessage: passErr,
            confrimPasswordErrorMessage: confErr
        }, () => {
            if (passErr !== "" || confErr !== "") event.preventDefault()
        })

        if (passErr !== "" || confErr !== "") return


        const signupData = {
            "name": this.state.fName + " " + this.state.lName,
            "email": this.state.email,
            "password": this.state.password
        }

        axios.post(`${base_url}/user/signup`, signupData)
            .then(
                (response) => {
                    console.log(response.data)
                    toast.success("Signup SuccessFull")
                },
                (error) => {
                    console.error(error)
                    toast.error("Something went wrong")
                }
            )
        event.preventDefault()
    }

    handleFNameChange = (event) => {
        this.setState({
            fName: event.target.value
        }, this.buttonFuct)
    }

    handleLNameChange = (event) => {
        this.setState({
            lName: event.target.value
        }, this.buttonFuct)
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        }, this.buttonFuct)
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        }, this.buttonFuct)
    }

    handleConfirmPasswordChange = (event) => {
        this.setState({
            confrimPassword: event.target.value
        }, this.buttonFuct)
    }

    buttonFuct = () => {
        if (this.state.username !== "" && this.state.password !== "" && this.state.confrimPassword !== "") {
            this.setState({
                disabled: ""
            })
        }
    }

    render() {
        const { disabled } = this.state
        return (
            <main>
                <div className='container'>

                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <h1 className="text-center">Signup form</h1>
                        <div className="row justify-content-center">
                            <div className="col-3 mb-3">
                                <label htmlFor="fName" className="form-label">First Name</label>
                                <input type="text" autoFocus className="form-control" id="fName" onChange={(event) => this.handleFNameChange(event)} />
                            </div>
                            <div className="col-3 mb-3">
                                <label htmlFor="lName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lName" onChange={(event) => this.handleLNameChange(event)} />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-6 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" onChange={(event) => this.handleEmailChange(event)} />
                                <div id="emailErrorMessage" className="form-text text-danger">{this.state.emailErrorMessage}</div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-6 mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" onChange={(event) => this.handlePasswordChange(event)} />
                                <div id="passwordErrorMessage" className="form-text text-danger">{this.state.passwordErrorMessage}</div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-6 mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" onChange={(event) => this.handleConfirmPasswordChange(event)} />
                                <div id="confrimPasswordErrorMessage" className="form-text text-danger">{this.state.confrimPasswordErrorMessage}</div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-2">
                                <button type="submit" disabled={disabled} className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        )
    }
}