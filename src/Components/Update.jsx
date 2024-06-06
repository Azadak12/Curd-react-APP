import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Table, Col, Form, Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";

function Update() {
  const [mydata, setMydata] = useState([]);
  const [updateData, setUpdateData] = useState({});
  const url = "https://665ef0711e9017dc16f21ccb.mockapi.io/Crdu";

  const getdata = () => {
    axios.get(url).then((response) => {
      setMydata(response.data);
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${url}/${id}`).then(() => {
      getdata();
    });
  };

  const handleUpdate = (id) => {
    const dataToUpdate = mydata.find((item) => item.id === id);
    setUpdateData(dataToUpdate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .put(`${url}/${updateData.id}`, updateData)
      .then(() => {
        getdata();
        setUpdateData({});
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <Container className="mt-4">
      <h1 className="bg-success rounded p-2 text-white text-center">
        Update Data
      </h1>
      <Row>
        <Col md={12}>
          <div className="table-responsive">
            <Table striped bordered hover className="text-center">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Actions</th>
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
                      <td>
                        <span
                          style={{
                            fontSize: "24px",
                            color: "red",
                            cursor: "pointer",
                            marginRight: "10px",
                          }}
                          onClick={() => handleDelete(id)}
                        >
                          <MdDelete />
                        </span>
                        <span
                          style={{
                            fontSize: "20px",
                            color: "blue",
                            cursor: "pointer",
                          }}
                          onClick={() => handleUpdate(id)}
                        >
                          <GrDocumentUpdate />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
     
      {Object.keys(updateData).length > 0 && (
        <Row>
          <Col md={12}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="e_name"
                  value={updateData.e_name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="text"
                  name="e_age"
                  value={updateData.e_age}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="e_email"
                  value={updateData.e_email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Update
              </Button>
            </Form>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Update;
