import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router'

const EditContact = ({ onChange, contacts, getAllContact}) => {
    const history = useHistory()
    const submitNewContact = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3004/contact/${contacts.id}`, contacts)
            .then(response => {
                history.push('/')
                console.log(response);
                getAllContact()
            })
    }
    return (
        <div className="container py-5">
            <h1 className="py-3">Edit Contact here</h1>
            <div className="row">
                <form onSubmit={submitNewContact} className="col-md-6 col">
                    <div className="form-group">
                        <label>Name</label>
                        <input value={contacts.name} onChange={onChange} name="name" type="text" className="form-control" placeholder="Your name here" />
                    </div>
                    <div className="form-group mb-4">
                        <label>Email address</label>
                        <input value={contacts.email} onChange={onChange} name="email" type="email" className="form-control" placeholder="Your email here" />
                    </div>
                    <button className="btn btn-primary btn-block font-weight-bold">Update</button>
                </form>
            </div>
        </div>
    )
}

export default EditContact
