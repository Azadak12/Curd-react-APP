import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Table } from 'react-bootstrap';

function Read() {
  const[mydata, setMydata]=useState([]);
  useEffect(()=>{

 
  const url= "https://665ef0711e9017dc16f21ccb.mockapi.io/Crdu";
  axios.get(url).then((response)=>{
    setMydata(response.data);
  })
})
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {

mydata.map((itmes)=>{
  const {id, e_name, e_age, e_email}=itmes;
  return(
<tr>
  <td>{id}</td>
  <td>{e_name}</td>
  <td>{e_age}</td>
  <td>{e_email}</td>
</tr>
  )
})
}
        </tbody>
      </Table>     
    </div>
  )
}

export default Read
