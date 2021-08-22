import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

const FormContact = () => {
    const history = useHistory()
    const [contact, setContact] = useState({
        name: "",
        email: ""
    })

    const onChange = (e) => {
        setContact((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
            id: uuidv4()
        }))
    }

    const addContactToAPI = () => {
        axios.post("http://localhost:3004/contact", contact)
            .then(res => {
                console.log("Data tersubmit : ", res);
                history.push('/')
            })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addContactToAPI()
    }
    return (
        <div className="container py-5">
            <h1 className="py-3">Add Contact here</h1>
            <div className="row">
                <form onSubmit={onSubmit} className="col-md-6 col">
                    <div className="form-group">
                        <label>Name</label>
                        <input onChange={onChange} name="name" type="text" className="form-control" placeholder="Your name here" />
                    </div>
                    <div className="form-group mb-4">
                        <label>Email address</label>
                        <input onChange={onChange} name="email" type="email" className="form-control" placeholder="Your email here" />
                    </div>
                    <button className="btn btn-primary btn-block font-weight-bold">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default FormContact
