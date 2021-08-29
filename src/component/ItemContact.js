import React from 'react'

const ItemContact = ({contact, remove, update}) => {
    return (
        <div className="border-darken-1 border-top border-bottom py-4">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                    <div style={{ width: 100, height: 100 }} className="p-3">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" className="svg-inline--fa fa-user-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-weight-bold m-0">{contact.name}</h3>
                        <p className="text-muted m-0">{contact.email}</p>
                    </div>
                </div>
                <div className="align-items-center justify-content-center">
                    <button onClick={() => update(contact)} className="btn btn-success mx-3">Update</button>
                    <button onClick={() => remove(contact.id)}  className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ItemContact
