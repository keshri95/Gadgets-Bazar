import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import Footer from "../Footer";

const Home = () => {
  const { products, loading } = useGlobalContext();

  if (loading) {
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
        <p className="text-center display-6">Welcome to prodcts shopping...</p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((elem) => {
            const { category, id, thumbnail, price, title, brand } = elem;
            return (
              <Link
                to={`products/${id}`}
                key={id}
                className="text-decoration-none"
              >
                <div className="col">
                  <div className="card h-100">
                    <img src={thumbnail} className="card-img-top" alt={title} />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{category}</p>
                      <p className="card-text">{brand}</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">${price}</small>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
