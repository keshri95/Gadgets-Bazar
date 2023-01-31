import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
import { API } from "./context";
const Pagination = () => {
    const { products, page , setPage } = useGlobalContext();
//   const getSomeProducts = async () => {
//     try {
//       const res = await fetch(API);
//       const data = await res.json();
//       console.log(data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     getSomeProducts();
//   }, []);

    const setpageHandler = (selectPage) => {
        if (selectPage >= 1 && selectPage < products.length / 10 && selectPage !== page ){
            setPage(selectPage);
        }
    }

  return (
    <>
      <div className="d-flex justify-content-center my-2">
        <button className="btn btn-primary" onClick={() => setpageHandler(page - 1)}>Prev</button>
        {
            [...Array(products.length / 10)].map((_, i) => {

                return (
                    <button className="btn btn-primary" onClick={() => setpageHandler(i+1)} key={i}>{i+1}</button>
                );
            })            
        }
        <button className="btn btn-primary" onClick={() => setpageHandler(page + 1)}>Next</button>
      </div>
    </>
  );
};

export default Pagination;
