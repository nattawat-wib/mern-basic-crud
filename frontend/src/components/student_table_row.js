import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

const StudentTableRow = props => {    
    const delete_student = () => {
        axios.delete(`http://localhost:8080/api/student/${props.obj.email}`).then(resp => {
            console.log(resp.data);

            if(resp.data.status) window.location.reload()
        }).catch(console.log)
    }

    return(
        <tr>
            <td> {props.obj.name} </td>
            <td> {props.obj.email} </td>
            <td> {props.obj.roll_no} </td>
            <td> 
                <Link className="btn btn-warning mx-2" to={`/edit-student/${props.obj.email}`}> Edit </Link>
                <Button onClick={delete_student} variant="danger"> delete </Button>
            </td>
        </tr>
    )
}

export default StudentTableRow