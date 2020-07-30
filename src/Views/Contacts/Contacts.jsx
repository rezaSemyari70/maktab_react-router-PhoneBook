import React  from 'react';

import TableRow from '../../Components/TableRow/TableRow';


function Contacts({contacts , setContacts}) {

    const handleDelete = (id) => {
        setContacts([...contacts.filter(contact => contact.id !== id)])
    }

  
    return (
        <div className="container">
            <div className="table-responsive-sm">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Contacts</th>
                            {/* <th scope="col">Lastname</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th> */}
                            <th scope="col">Action</th>
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
