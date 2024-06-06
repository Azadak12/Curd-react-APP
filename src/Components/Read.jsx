import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container } from 'react-bootstrap';

function Read() {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    const url = 'https://665ef0711e9017dc16f21ccb.mockapi.io/Crdu';
    axios.get(url).then((response) => {
      setMydata(response.data);
    });
  }, []);

  return (
    <Container className="mt-4">
      <h1 className="bg-success rounded p-2 my-4 text-white text-center">Read Data</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((item) => {
            const { id, e_name, e_age, e_email } = item;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{e_name}</td>
                <td>{e_age}</td>
                <td>{e_email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Read;
