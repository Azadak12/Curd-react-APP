import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Table, Col } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";

function Delete() {
  const [mydata, setMydata] = useState([]);
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

  return (
    <Container className="mt-4">
      <h1 className="bg-success rounded p-2 text-white text-center">Delete Data</h1>
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
    </Container>
  );
}

export default Delete;
