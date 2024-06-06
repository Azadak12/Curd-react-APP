import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="d-flex justify-content-around my-2">
      <Link to="/create" className="btn btn-primary">Create Data</Link>
      <Link to="/read" className="btn btn-primary">Read Data </Link>
      <Link to="/delete" className='btn btn-primary'>Delete Data</Link>
      <Link to="/update" className='btn btn-primary'>Update Data</Link>
    </div>
  );
}

export default Home;
