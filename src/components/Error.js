import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context/context";
const Error = () => {
  const {loading} = useGlobalContext();

  if (loading) {
    return (
      <div className="text-center">
        <div
          className="spinner-grow "
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="placeholder-wave bg-dark p-2 text-white bg-opacity-75" style={{ height: "100vh" }}>
        <div className="position-absolute top-50 start-50 translate-middle">
          <p className="text-center display-1 text-light">404</p>
          <Link to="/" className="btn btn-primary btn-lg">Back to Home</Link>
        </div>
      </div>
    </>
  );
};

export default Error;
