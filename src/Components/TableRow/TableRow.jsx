import React from 'react';
import {Link} from 'react-router-dom';

import swal from 'sweetalert';


function TableRow(props) {


    const handleConfirmDelete = () => {
        swal({
            title: "Are you sure?",
            text: "you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                props.handleDelete()
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    };

    return (
        
        <tr >
            <td className="text-center">{`${props.firstname}`} {`${props.lastname}`}</td>
            <td className="text-center">
                <button className="btn btn-outline-danger btn-sm rounded mr-3" onClick={handleConfirmDelete}>Delete</button>
                <Link to={`/contacts/${props.id}`}><button className="btn btn-primary btn-sm" >More Info</button></Link>
            </td>
        </tr>
        
    );
}

export default TableRow;
