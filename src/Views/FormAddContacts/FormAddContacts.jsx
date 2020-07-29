import React , {useState} from 'react';
import { useHistory } from "react-router-dom";

import swal from 'sweetalert';


    const FormAddContact = ({props}) => {
        let history = useHistory();
        
        const [newContact, setNewContact] = useState({
            firstname: '', lastname: '',email: '', phone: '' , address:''
    }); 
    
    const handleChange = (event) => { 
        const value = event.target.value; 
        console.log(value)
        setNewContact({ ...newContact, [event.target.name]: value }) } 
    
    const handleClear = () => {
        setNewContact({firstname: '', lastname: '', email: '', phone: '' , address:''}) 
    } 

    const handleSubmit = (event) => { 
        event.preventDefault(); 

        // if(newContact.firstname.length > 0 
        //     && newContact.lastname.length > 0 
        //     && newContact.email.length > 0 
        //     && newContact.phone.length > 0 
        //     && newContact.address.length > 0) {

                // props.handleAdd({ ...newContact, id: Math.floor(Math.random() * 1000 + 10) })
                swal("Add Contact", "You added to list of Contacts");
                handleClear();
                history.push('/contacts')   
        // } 
    }

    return (

        <div className="container">
            <form className="needs-validation"  onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationTooltip01">First name</label>
                        <input type="text" className="form-control" id="validationTooltip01" placeholder="first name" // value=""
                            required onChange={handleChange}/>
                        <div className="valid-tooltip">Looks good!</div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationTooltip02">Last name</label>
                        <input type="text" className="form-control" id="validationTooltip02" placeholder="last name" // value=""
                            required  onChange={handleChange}/>
                        <div className="valid-tooltip">Looks good!</div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationTooltipEmail">Email</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                            </div>
                            <input
                                type="email"
                                className="form-control"
                                id="validationTooltipEmail"
                                placeholder="email"
                                aria-describedby="validationTooltipEmailPrepend"
                                required onChange={handleChange}/>
                            <div className="invalid-tooltip">
                                Please enter valid email.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationTooltip03">Phone</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="validationTooltip03"
                            placeholder="tel"
                            required onChange={handleChange}/>
                        <div className="invalid-tooltip">
                            Please enter a valid phone.
                        </div>
                    </div>
                    <div className="col-md-8 mb-3">
                        <label htmlFor="validationTooltip04">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationTooltip04"
                            placeholder="address"
                            required onChange={handleChange}/>
                        <div className="invalid-tooltip">
                            Please enter a valid address.
                        </div>
                    </div>

                </div>
                <button className="btn btn-success" type="submit">Save Contact</button>
                <button className="btn btn-secondary" >Clear Form</button>
            </form>
        </div>
    )
}

export default FormAddContact;