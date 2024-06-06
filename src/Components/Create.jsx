import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';


function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");
  const url = "https://665ef0711e9017dc16f21ccb.mockapi.io/Crdu";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(url, {
      e_name: name,
      e_age: age,
      e_email: email
    });
  };

  return (
    <Container className="mt-4">
              <h1 className="bg-success rounded p-2 text-white text-center">Post Data</h1>
      <Form onSubmit={handleSubmit} className="custom-form">
        <Form.Group className="mb-3">
          <Form.Label>Enter Name:</Form.Label>
          <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Enter Age:</Form.Label>
          <Form.Control type="number" onChange={(e) => setAge(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Enter Email:</Form.Label>
          <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <div className='d-grid'>
        <Button type="submit" variant="primary">Post</Button></div>
      </Form>
    </Container>
  );
}

export default Create;
