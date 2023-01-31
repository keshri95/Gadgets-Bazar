import React, { useEffect, useState } from "react";

const Footer = () => {
  const [top, setTop] = useState(false);

  let year = new Date().getFullYear();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setTop(true) : setTop(false);
    });

  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <>
      <div className="py-2 bg-light">
        <div className="container">
          <p className="d-flex justify-content-center">
            &copy; Ashish Keshri {year}
          </p>
          <div className="position-fixed bottom-0 end-0 m-3">
          { top && (
            <button className="btn btn-dark rounded-circle" onClick={() => scrollTop()}>^</button>
          )
           } 

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
