import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './ContactInfo.css'
import AOS from 'aos'

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

    AOS.init();


    return <> 
        <div className="container-fluid mt-5 contentCard">
            <div className="card text-white bg-primary mt-5 mb-3"  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                <p2 className="card-header">Contact Information</p2>
                <div className="card-body">
                    <div className="d-flex">
                        <h3 className="card-title"><span>{list.firstname} {list.lastname}</span></h3>
                        <i className="fa fa-phone fa-3x ml-4 tel"></i>
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