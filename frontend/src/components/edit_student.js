import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditStudent = () => {
    const [ user, update_user ] = useState({
        name: "",
        email: "",
        roll_no: ""
    });
    const { email } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8080/api/student/${email}`).then(resp => {
            update_user(resp.data.data[0])
        })
    }, [])

    console.log(user);

    const change_form = e => {
        update_user({ [e.target.name]: e.target.value }) 
    }

    const submit_form = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8080/api/student/${email}`, user).then(resp =>{

            if(resp.data.status) console.log("success"); window.location.href = "/student-list"
        })
    }

    return(
        <div className="form-wrapper m-5">
            <h1> Edit Student {user.name} </h1>
            <Form onSubmit={submit_form}>
                <Form.Group>
                    <Form.Label> Name </Form.Label>
                    <Form.Control type="text" name="name" onChange={change_form} value={user.name} />
                </Form.Group>   

                <Form.Group>
                    <Form.Label> Email </Form.Label>
                    <Form.Control type="email" name="email" onChange={change_form} value={user.email} />
                </Form.Group>   

                <Form.Group>
                    <Form.Label> Roll No. </Form.Label>
                    <Form.Control type="text" name="roll_no" onChange={change_form} value={user.roll_no} />
                </Form.Group>   

                <Button variant="success" block="block" type="submit"> Submit </Button>
            </Form>
        </div>
    )
}

export default EditStudent;