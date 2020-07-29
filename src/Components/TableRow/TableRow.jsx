import React from 'react';

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
    }

    return (
        <tr>
            <td>{`${props.firstname}`}</td>
            <td>{`${props.lastname}`}</td>
            <td>{`${props.email}`}</td>
            <td>{`${props.phone}`}</td>
            <td>{`${props.address}`}</td>
            <td>
                <button className="btn-outline-danger rounded " onClick={handleConfirmDelete}>Delete</button>
            </td>
        </tr>
    );
}

export default TableRow;
