import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-3 mb-2">
          <Link to="/create" className="btn btn-primary w-100">Create Data</Link>
        </div>
        <div className="col-12 col-md-3 mb-2">
          <Link to="/read" className="btn btn-primary w-100">Read Data</Link>
        </div>
        <div className="col-12 col-md-3 mb-2">
          <Link to="/delete" className="btn btn-primary w-100">Delete Data</Link>
        </div>
        <div className="col-12 col-md-3 mb-2">
          <Link to="/update" className="btn btn-primary w-100">Update Data</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
