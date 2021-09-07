import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./pages/AddContact";
import ContactList from "./pages/ContactList";
import EditContact from "./pages/EditContact";
import api from "./api/api";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  const [id, setId] = useState([]);

  const [updateNewContacts, setUpdateNewContacts] = useState({
    name: "",
    email: "",
    id: "",
  });

  const getContact = async () => {
    await api.get("/contact?_sort=id&_order=desc").then((res) => {
      setContacts(res.data);
    });
  };

  const handleOnchange = (e) => {
    let newContact = { ...updateNewContacts };
    newContact[e.target.name] = e.target.value;
    let timestamp = new Date().getTime();
    if (!isUpdate) {
      newContact["id"] = timestamp;
    }
    setUpdateNewContacts(newContact);
  };

  const handleContactRemove = (id) => {
    console.log("render remove contact");
    setIsRemove(true);
    setId(id);
  };

  const sureRemove = (id) => {
    console.log("render sure remove contact");
    api.delete(`/contact/${id}`).then((res) => {
      const newContactList = contacts.filter((contact) => contact.id !== id);
      setContacts(newContactList);
      setIsRemove(false);
    });
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <div className="container py-5 position-relative">
      <Router>
        <Switch>
          <Route exact path="/">
            <ContactList
              contacts={contacts}
              setUpdateNewContacts={setUpdateNewContacts}
              remove={handleContactRemove}
              id={id}
              setIsUpdate={setIsUpdate}
              isRemove={isRemove}
              setIsRemove={setIsRemove}
              sureRemove={sureRemove}
            />
          </Route>
          <Route exact path="/add-contact">
            <AddContact
              getAllContact={getContact}
              onChange={handleOnchange}
              contacts={updateNewContacts}
            />
          </Route>
          <Route exact path="/edit-contact">
            <EditContact
              getAllContact={getContact}
              onChange={handleOnchange}
              contacts={updateNewContacts}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Contact;
