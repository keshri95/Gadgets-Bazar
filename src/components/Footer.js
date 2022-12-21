import React, { useEffect, useState } from "react";

const Footer = () => {
  const [top, setTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setTop(true) : top(false);
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
      <div className="navbar navbar-expand-lg bg-light my-2">
        <div className="container">
          <p className=" text-center">&copy;2022 Footer </p>
          <div className="position-absolute bottom-0 end-0">
            {top && (
              <button
                className="btn btn-dark m-5 rounded-circle"
                onClick={() => scrollTop()}
              >
                ^
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
