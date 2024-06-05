import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Form, Table, Button } from 'react-bootstrap';
import axios from 'axios';


function Create() {
  const[name, setName]=useState("");
  const[age, setAge]=useState();
  const[email, setemail]=useState("");
  const Url=" https://665ef0711e9017dc16f21ccb.mockapi.io/Crdu";

const handlesubmit=(e)=>{
  e.preventDefault();
  axios.post("https://665ef0711e9017dc16f21ccb.mockapi.io/Crdu", {
    e_name:name,
    e_age:age,
    e_email:email
  });
}
  return (
    <div>
       <form onSubmit={handlesubmit}>
        <label>Enter Name:</label>
        <input type="text" name='name'  onChange={((e)=>{setName(e.target.value)})} />
        <br /><br />
        <label>Enter Age:</label>
        <input type="number" name='name'onChange={((e)=>{setAge(e.target.value)})} />
        <br /> <br />
        <label>Enter Email:</label>
        <input type="email" name=''onChange={((e)=>{setemail(e.target.value)})} />
        <br />
        <Button type='submit' value="post">Post</Button>
      </form>
      </div>
  )
}

export default Create
