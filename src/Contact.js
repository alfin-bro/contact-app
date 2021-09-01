import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddContact from './pages/AddContact'
import ContactList from './pages/ContactList'
import EditContact from './pages/EditContact'
import { v4 as uuidv4 } from 'uuid';



const Contact = () => {
    const [contacts, setContacts] = useState([])
    const [isUpdate, setIsUpdate] = useState(false)
    const [isRemove, setIsRemove] = useState(false)
    const [id, setId] = useState([])

    const [updateNewContacts, setUpdateNewContacts] = useState({
        name: "",
        email: "",
        id: ""
    })


    const getContact = async () => {
        await axios.get("http://localhost:3004/contact?_sort=id&_order=desc")
            .then(response => {
                setContacts(response.data)
            })
    }

    const handleOnchange = (e) => {
        let newContact = { ...updateNewContacts }
        newContact[e.target.name] = e.target.value
        let timestamp = new Date().getTime()
        if (!isUpdate) {
            newContact["id"] = timestamp
        }
        setUpdateNewContacts(newContact)
    }

    const handleContactRemove = (id) => {
        setIsRemove(true)
        setId(id)
    }

    const sureRemove = (id) => {
           axios.delete(`http://localhost:3004/contact/${id}`)
            .then(res => {
                const newContactList = contacts.filter(contact => contact.id !== id)
                setContacts(newContactList)
                setIsRemove(false)
            })
    }

    useEffect(() => {
        getContact()
    }, []);



    return (
        <div className="container py-5 position-relative">
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <ContactList contacts={contacts} setUpdateNewContacts={setUpdateNewContacts} remove={handleContactRemove} id={id} setIsUpdate={setIsUpdate} isRemove={isRemove} setIsRemove={setIsRemove} sureRemove={sureRemove} />
                    </Route>
                    <Route exact path='/add-contact'>
                        <AddContact getAllContact={getContact} onChange={handleOnchange} contacts={updateNewContacts} />
                    </Route>
                    <Route exact path='/edit-contact'>
                        <EditContact getAllContact={getContact} onChange={handleOnchange} contacts={updateNewContacts} />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Contact
