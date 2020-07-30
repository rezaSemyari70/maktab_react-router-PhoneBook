import React  from 'react';

import TableRow from '../../Components/TableRow/TableRow';
import './Contacts.css'


function Contacts({contacts , setContacts}) {

    const handleDelete = (id) => {
        setContacts([...contacts.filter(contact => contact.id !== id)])
    }

  
    return (
        <div className="container mt-5">
            <div className="table-responsive-sm mt-5">
                <table className="table table-hover">
                    <thead className="bg-primary">
                        <tr >
                            <th className="text-center" scope="col"><i className="fa fa-users mr-2"></i>Contacts</th>
                            {/* <th scope="col">Lastname</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th> */}
                            <th className="text-center" scope="col"><i className="fa fa-tasks mr-2"></i>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {contacts.map(contact=>(
                                
                                    <TableRow 
                                        key={contact.id} 
                                        firstname={contact.firstname}
                                        lastname={contact.lastname}    
                                        email={contact.email}    
                                        phone={contact.phone}
                                        address={contact.address}
                                        handleDelete={()=> handleDelete(contact.id)}
                                    />
                                
                            ))}     
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Contacts
