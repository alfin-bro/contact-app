import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import ItemContact from '../component/ItemContact';
import './ContactList.css'

const ContactList = ({ contacts, remove, setIsUpdate, setUpdateNewContacts, setIsRemove, isRemove, id, sureRemove}) => {
    const history = useHistory()
    const modalWrapper = isRemove ? "modalWrapper" : "d-none"

    const updateHandler = (data) => {
        setUpdateNewContacts(data)
        setIsUpdate(true)
        history.push('/edit-contact')
    }
    return (
        <>
            <h1 className="text-center py-4">Contact Manager</h1>
            <div className="d-flex justify-content-between align-items-center">
                <h1 className='py-3'>Contact List</h1>
                <Link to="/add-contact" className="btn font-weight-bold btn-primary">Add Contact</Link>
            </div>
            {
                contacts.length > 0 ? (
                    <>
                        {
                            contacts?.map(contact => {
                                return (
                                    <ItemContact key={contact.id} contact={contact} remove={remove} update={updateHandler} setIsRemove={setIsRemove} />
                                )
                            })
                        }

                    </>
                ) : <div className="d-flex justify-content-center align-items-center flex-column">
                    <h1 className="justify-content-center text-center text-danger py-5">Contact Not available</h1>
                    <Link className="btn btn-primary" to='/add-contact'>Add Contact now!</Link>
                </div>
            }
            <div className={modalWrapper}>
                <div className="modal-details py-3">
                    <h5>
                        Are you sure to remove this contact ?
                    </h5>
                </div>
                <div className="modal-trigger">
                    <button onClick={() => sureRemove(id)} className="btn btn-primary mx-3 px-5 py-3">Yes</button>
                    <button onClick={() => setIsRemove(false)} className="btn btn-danger px-5 py-3">Cancel</button>
                </div>
            </div>
        </>
    )
}

export default ContactList
