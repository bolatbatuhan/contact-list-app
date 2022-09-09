import React, {useState, useEffect } from 'react'
import './styles.css'
import List from './List'
import Form from './Form'

function Contacts() {
  const [contacts, setContacts] = useState([{
    fullname: 'Batuhan',
    phone_number : '123123'
  }, {
    fullname:"Ayşe",
    phone_number:'456457'
  },{
    fullname:'Aslı',
    phone_number: '19191'
  }
  
]);

  useEffect(() => {
    console.log(contacts)
   }, [contacts])

  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts = {contacts} />
      <Form addContact={setContacts} contacts ={contacts} />
    </div>
  )
}

export default Contacts