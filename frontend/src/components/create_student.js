import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const CreateStudent = () => {
    const [ form, update_form ] = useState({});

    const change_form = e => {        
        
        update_form(prev_form => {
            prev_form[e.target.name] = e.target.value
            return prev_form
        })
    }

    const submit_form = e => {
        e.preventDefault();
        console.log(form);

        axios.post("http://localhost:8080/api/student", form).then(resp => {
            console.log("resp", resp);

            if(resp.data.status) {
                update_form({
                    name: "",
                    email: "",
                    roll_no: ""
                })
            }
        })

    }

    return (
        <div className="form-wrapper m-5">
            <h1> Create Student </h1>
            <Form onSubmit={submit_form}>
                <Form.Group>
                    <Form.Label> Name </Form.Label>
                    <Form.Control type="text" name="name" onChange={change_form} value={form.name} />
                </Form.Group>   

                <Form.Group>
                    <Form.Label> Email </Form.Label>
                    <Form.Control type="email" name="email" onChange={change_form} value={form.email} />
                </Form.Group>   

                <Form.Group>
                    <Form.Label> Roll No. </Form.Label>
                    <Form.Control type="text" name="roll_no" onChange={change_form} value={form.roll_no} />
                </Form.Group>   

                <Button variant="success" block="block" type="submit"> Submit </Button>
            </Form>
        </div>
    )
}

export default CreateStudent;