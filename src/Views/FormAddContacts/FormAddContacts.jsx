import React , {useState} from 'react';
import { useHistory } from "react-router-dom";

import swal from 'sweetalert';
import './FormAddContacts.css'
import AOS from 'aos'


    const FormAddContact = ({ contacts, setContacts , firstname , lastname , email , phone , address , setFirstname , setLastname , setEmail , setPhone , setAddress}) => {
        let history = useHistory();
        
    const handleSubmit = (event) => { 
        event.preventDefault(); 

               firstname.trim().length > 0 
            && lastname.trim().length > 0 
            && email.trim().length > 0 
            && phone.trim().length > 0 
            && address.trim().length > 0 
            && setContacts([...contacts , {
                id:Date.now() ,
                firstname ,
                lastname ,
                email ,
                phone ,
                address}]
            )
                swal("Add Contact", "You added to list of Contacts");
                history.push('/contacts')    
    }

    AOS.init();

    return (

        <div className="container mt-5" style={{overflow:'hidden'}}>
            <form className="needs-validation"  onSubmit={handleSubmit} data-aos="zoom-in">
                <div className="form-row">
                    <div className="col-md-4 mb-1">
                        <label className="font-weight-bolder text-white" htmlFor="validationTooltip01">First name</label>
                        <input type="text" className="form-control" id="validationTooltip01" placeholder="first name" // value=""
                            required onChange={e => setFirstname(e.target.value)}/>
                        <div className="valid-tooltip">Looks good!</div>
                    </div>
                    <div className="col-md-4 mb-1">
                        <label className="font-weight-bolder text-white" htmlFor="validationTooltip02">Last name</label>
                        <input type="text" className="form-control" id="validationTooltip02" placeholder="last name" // value=""
                            required  onChange={e => setLastname(e.target.value)}/>
                        <div className="valid-tooltip">Looks good!</div>
                    </div>
                    <div className="col-md-4 mb-1">
                        <label className="font-weight-bolder text-white" htmlFor="validationTooltipEmail">Email</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                            </div>
                            <input
                                type="email"
                                className="form-control"
                                id="validationTooltipEmail"
                                placeholder="email"
                                aria-describedby="validationTooltipEmailPrepend"
                                required onChange={e => setEmail(e.target.value)}/>
                            <div className="invalid-tooltip">
                                Please enter valid email.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label className="font-weight-bolder text-white" htmlFor="validationTooltip03">Phone</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="validationTooltip03"
                            placeholder="tel"
                            required onChange={e => setPhone(e.target.value)}/>
                        <div className="invalid-tooltip">
                            Please enter a valid phone.
                        </div>
                    </div>
                    <div className="col-md-8 mb-3">
                        <label className="font-weight-bolder text-white" htmlFor="validationTooltip04">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationTooltip04"
                            placeholder="address"
                            required onChange={e => setAddress(e.target.value)}/>
                        <div className="invalid-tooltip">
                            Please enter a valid address.
                        </div>
                    </div>

                </div >
                <div className="mb-4">
                    <button className="btn btn-success" type="submit">Save Contact</button>{' '}
                    <button className="btn btn-secondary" type="reset" >Clear Form</button>
                </div>
            </form>
        </div>
    )
}

export default FormAddContact;