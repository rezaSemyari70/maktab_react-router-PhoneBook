import React, {useState} from 'react';

import {Link, Route, Switch} from 'react-router-dom'
// import './App.css';
import Contacts from '../../Views/Contacts/Contacts';
import FormAddContact from '../../Views/FormAddContacts/FormAddContacts';
import ContactInfo from '../ContactInfo/ContactInfo';

function Main() {

    const [firstname , setFirstname] = useState('');
    const [lastname , setLastname] = useState('');
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('');
    const [address , setAddress] = useState('');

    const [contacts , setContacts] = useState([
        // {
        //     id: 1,
        //     firstname: 'ali',
        //     lastname: 'davudi',
        //     email: 'ali@gmail.com',
        //     phone: '09123846734',
        //     address: 'tehran azadi'
        // }, {
        //     id: 2,
        //     firstname: 'Saeed',
        //     lastname: 'mohammadi',
        //     email: 'saeed@gmail.com',
        //     phone: '09103843917',
        //     address: 'tehran tehranpars'
        // }
    ])

    // const [selectedContact , setSelectedContact] = useState([...contacts]);

    // const handleSelectContact = (id)=> {
    //     console.log(id)
    //     setSelectedContact([...selectedContact.filter(selectContact=> selectContact.id === id)])
    // }

    

    return (
        <div>

            <div className="content">
                <nav className="navbar navbar-expand navbar-dark bg-dark ">
                    <Link to="/" className="nav-link font-weight-bold text-white">Home</Link>
                    <div className=" navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/contacts" className="text-white">Contacts</Link>
                            </li>
                            <li className="nav-item ml-3">
                                <Link to="/contacts/add" className="text-white">Add New Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/contacts/add">
                        <FormAddContact  
                            firstname={firstname} 
                            lastname={lastname} 
                            email={email} 
                            phone={phone} 
                            address={address} 
                            setFirstname={setFirstname}
                            setLastname={setLastname}
                            setEmail={setEmail}
                            setPhone={setPhone}
                            setAddress={setAddress}
                            contacts={contacts}
                            setContacts={setContacts}
                        />
                    </Route>
                    <Route exact path="/contacts">
                        <Contacts contacts={contacts} setContacts={setContacts}/>
                    </Route>
                    <Route path="/contacts/:id" render={(props) => 
                        <ContactInfo 
                            contacts={contacts} 
                            // showInfo={handleSelectContact} 
                            {...props}
                        />}
                    />
                    <Route path="/"></Route>
                </Switch>
            </div>

        </div>
    )
}

export default Main;
