import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="jumbo_img d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="fw-bold text-white">The Everything eCommerce</h1>
            </div>
            <div className="col pt-3">
              <NavLink to="/products" className="btn btn-primary">
                Products
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
