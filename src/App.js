import axios from 'axios';
import { useEffect, useState } from 'react';

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ContactList from './pages/ContactList';
import FormContact from './pages/FormContact';


const App = () => {
  return (
    <div className="container py-4">
      <Router>
        <Route exact path='/' component={ContactList} />
        <Route path='/add-contact' component={FormContact} />
      </Router>
    </div>
  )
}

export default App
