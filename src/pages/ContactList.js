import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ContactItem from '../component/ContactItem'

const ContactList = () => {

    const [contacts, setContacts] = useState([])

    const getContact = () => {
        axios.get("http://localhost:3004/contact")
            .then(res => {
                setContacts(res.data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getContact()
    }, []);


    return (
        <>
            <h1 className="text-center py-4">Contact App Manager</h1>
            <div className="d-flex justify-content-between align-items-center">
                <h1 className='py-3'>Contact List</h1>
                <Link to="/add-contact" className="btn font-weight-bold btn-primary">Add Contact</Link>
            </div>
            {
                contacts.map(contact => {
                    return (
                        <ContactItem name={contact.name} email={contact.email} key={contact.id} />
                    )
                })
            }
        </>
    )
}

export default ContactList
