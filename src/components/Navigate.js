import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API, useGlobalContext } from "./context/context";
const Navigate = () => {
  const { param } = useParams();
  const { products, setProducts, dispatch, isLoading } = useGlobalContext();
  // const [products, setProducts] = useState([]);
  const getSomeProducts = async (url) => {
    // dispatch({
    //   type: "LOADING",
    // });
    
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setProducts(data);
      // console.log(data);

      // dispatch({
      //   type: "NAVIGATE",
      //   payload: data,
      // });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSomeProducts(`${API}/${param}`);

  }, [param]);

  if (isLoading) {
    return (
      <>
        <div className="text-center">
          <div
            className="spinner-grow "
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container">
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="card" style={{ maxWidth: "540px" }}>
            <div className="row">
              <div className="col-md-6">
                <img
                  src={products.thumbnail}
                  className="img-fluid h-100 rounded-start"
                  alt={products.title}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{products.title}</h5>
                  <p className="card-text">{products.rating}</p>
                  <p className="card-text">${products.price}</p>
                  <Link to="/" className="btn btn-primary">
                    Go Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigate;
