import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

const EditContact = ({ onChange, contacts, getAllContact }) => {
  const [approved, setApproved] = useState(false);

  const modalWrapper = approved ? "modalWrapper" : "d-none";

  const submitNewContact = useCallback(
    (e) => {
      console.log("render submit new contact");
      e.preventDefault();
      api.put(`/contact/${contacts.id}`, contacts).then((response) => {
        getAllContact();
        setApproved(true);
      });
    },
    [approved, contacts]
  );
  return (
    <div className="container py-5">
      <h1 className="py-3">Edit Contact here</h1>
      <div className="row">
        <form onSubmit={submitNewContact} className="col-md-6 col">
          <div className="form-group">
            <label>Name</label>
            <input
              value={contacts.name}
              onChange={onChange}
              name="name"
              type="text"
              className="form-control"
              placeholder="Your name here"
            />
          </div>
          <div className="form-group mb-4">
            <label>Email address</label>
            <input
              value={contacts.email}
              onChange={onChange}
              name="email"
              type="email"
              className="form-control"
              placeholder="Your email here"
            />
          </div>
          <button className="btn btn-primary btn-block font-weight-bold">
            Update
          </button>
        </form>
      </div>
      <div className={modalWrapper}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="check-circle"
          className="svg-inline--fa fa-check-circle fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
          ></path>
        </svg>
        <div className="content text-center py-2">
          <h4 className="py-1">Success Edit Contact</h4>
          <p className="text-muted text-secondary">
            You can add contact more in page add contact
          </p>
        </div>
        <div className="modal-trigger">
          <Link to="/" className="btn btn-primary px-5 py-3 shadow-lg">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
