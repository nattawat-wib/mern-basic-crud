import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import StudentTableRow from "./student_table_row";

const StudentList = () => {
    const [ student_list, update_student_list ] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/student").then(resp => update_student_list(resp.data.data)).catch(console.log);
    }, [])

    return(
        <div className="table-wrapper mt-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Roll No </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {student_list.map((data, i) => <StudentTableRow key={i} obj={data} />)}
                </tbody>
            </Table>
        </div>
    )
} 

export default StudentList;