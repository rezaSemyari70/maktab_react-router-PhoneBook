import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Contacts from './Views/Contacts/Contacts';


function App() {
    return (
        <div className="App">
            <Router>
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
                            
                        </Route>
                        <Route exact path="/contacts">
                            <Contacts/>
                        </Route>
                        <Route path="/">
                            
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
