import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router'

const AddContact = ({ onChange, getAllContact, contacts }) => {
    const history = useHistory()

    const submitContact = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3004/contact`, contacts)
            .then(response => {
                history.push('/')
                console.log(response);
                getAllContact()
            })
    }
    return (
        <div className="container py-5">
            <h1 className="py-3">Add Contact here</h1>
            <div className="row">
                <form onSubmit={submitContact} className="col-md-6 col">
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

export default AddContact
