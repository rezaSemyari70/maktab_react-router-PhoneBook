import React , {useState} from 'react'
import TableRow from '../../Components/TableRow/TableRow'

function Contacts() {
    const [contacts , setContacts] = useState([
        {
            id: 1,
            firstname: 'ali',
            lastname: 'davudi',
            email: 'ali@gmail.com',
            phone: '09123846734',
            address: 'tehran azadi'
        }, {
            id: 2,
            firstname: 'Saeed',
            lastname: 'mohammadi',
            email: 'saeed@gmail.com',
            phone: '09103843917',
            address: 'tehran tehranpars'
        }, {
            id: 3,
            firstname: 'kazem',
            lastname: 'masumi',
            email: 'kazem@gmail.com',
            phone: '09363843998',
            address: 'tehran monirieyeh'
        }, {
            id: 4,
            firstname: 'Nima',
            lastname: 'mohseni',
            email: 'nima@gmail.com',
            phone: '09353843972',
            address: 'tehran enghelab'
        }, {
            id: 5,
            firstname: 'Alireza',
            lastname: 'sharifi',
            email: 'alireza@gmail.com',
            phone: '09193843924',
            address: 'tehran piruzi'
        }, {
            id: 6,
            firstname: 'Makan',
            lastname: 'alimohammadi',
            email: 'makan@gmail.com',
            phone: '09123843911',
            address: 'tehran narmak'
        }, {
            id: 7,
            firstname: 'nader',
            lastname: 'amini',
            email: 'nader@gmail.com',
            phone: '09193844928',
            address: 'tehran saaadatabad'
        }, {
            id: 8,
            firstname: 'Yaser',
            lastname: 'davudi',
            email: 'Yaser@gmail.com',
            phone: '09153843949',
            address: 'tehran parkvey'
        }, {
            id: 9,
            firstname: 'Karim',
            lastname: 'davudi',
            email: 'karim@gmail.com',
            phone: '09133413972',
            address: 'tehran vanak'
        }, {
            id: 10,
            firstname: 'Morteza',
            lastname: 'davudi',
            email: 'morteza@gmail.com',
            phone: '09103843955',
            address: 'tehran javadieyeh'
        }
    ])

    const handleDelete = (id) => {
        console.log(id)
        setContacts([...contacts.filter(contact => contact.id !== id)])
    }

    return (
        <div className="container">
            <div className="table-responsive-sm">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
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
