import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="home_jumbo d-flex align-items-center text-center bg_home_jumbo_color">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="fw-bold">Flanagan eCommerce</h1>
            </div>
            <div className="col pt-3">
              <NavLink to="/products" className="btn btn-primary rounded-pill mx-3 px-4 py-2 fw-medium">
                Products
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
