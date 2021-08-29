import axios from 'axios';
import { useEffect, useState } from 'react';

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ContactList from './pages/ContactList';
import FormContact from './pages/FormContact';
import { v4 as uuidv4 } from 'uuid';
import EditContact from './pages/EditContact';


const App = () => {
  const [contacts, setContacts] = useState([])
  const [isUpdate, setIsUpdate] = useState(false)
  const [newContacts, setNewContacts] = useState({
    name: "",
    email: "",
    id: ""
  })


  const getContact = () => {
    axios.get("http://localhost:3004/contact")
      .then(res => {
        setContacts(res.data)
      })
  }

  const onChange = (e) => {
    let newContactUpdate = { ...newContacts }
    newContactUpdate[e.target.name] = e.target.value;
    if (!isUpdate) {
      newContactUpdate["id"] = uuidv4()
    }
    setNewContacts(newContactUpdate)
  }

  

  const removeContact = (id) => {
    axios.delete(`http://localhost:3004/contact/${id}`)
      .then(res => {
        const remove = contacts.filter(contact => id !== contact.id)
        setContacts(remove)
      })
  }


  useEffect(() => {
    getContact()
  }, [contacts]);


  return (
    <div className="container py-4">
      <Router>
          <Route exact path='/'>
            <ContactList setIsUpdate={setIsUpdate} setNewContact={setNewContacts} contacts={contacts} remove={removeContact} />
          </Route>
          <Route path='/add-contact'>
            <FormContact onChange={onChange}  contacts={newContacts} />
          </Route>
          <Route path='/edit-contact'>
            <EditContact onChange={onChange} contacts={newContacts} setIsUpdate={setIsUpdate} />
          </Route>
      </Router>
    </div>
  )
}

export default App
