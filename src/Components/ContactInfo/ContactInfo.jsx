import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function ContactInfo({contacts}) {

    let {id} = useParams();

    const [list,setList] = useState({})

    useEffect(() => {
        contacts.map(contact => setList({
            id: id,
            firstname: contact.firstname,
            lastname: contact.lastname,
            email: contact.email,
            phone: contact.phone,
            address: contact.address

        }))
    }, []);

    return <> 
        <div className="container-fluid mt-3">
            <div className="card text-white bg-primary mb-3">
                <p2 className="card-header">Contact Information</p2>
                <div className="card-body">
                    <div className="d-flex">
                        <h2 className="card-title"><span>{list.firstname} {list.lastname}</span></h2>
                        <i className="fa fa-phone fa-3x ml-4"></i>
                    </div>
                    <div className="d-flex">
                        <span>
                            <i className="fa fa-envelope mr-3"></i>
                        </span>
                        <p className="card-text">
                            <span className="font-weight-bold">Eamil :  </span>
                             {list.email}</p>
                    </div>
                    <div className="d-flex">
                        <span>
                            <i className="fa fa-phone mr-3"></i>
                        </span>
                        <p className="card-text">
                            <span className="font-weight-bold">Phone :  </span>
                             {list.phone}</p>
                    </div>
                    <div className="d-flex">
                        <span>
                            <i className="fa fa-map-marker mr-3"></i>
                        </span>
                        <p className="card-text">
                            <span className="font-weight-bold">Address :  </span>
                             {list.address}</p>
                    </div>
                </div>
            </div>
        </div> 
</>
}

export default ContactInfo;