import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  function getProducts() {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setProducts(data.data);
    });
  }



  useEffect(getProducts, []);

  return (
    <main>

        <section className="">
            <div className="container text-center my-5 py-5">
            <h1 className="fw-bolder products_title">Our Products</h1>
            <p className="text-secondary-emphasis">Discover a curated selection of products designed for everyday life and style.</p>

            </div>
        </section>


      <section>
        <div className="container my-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
              {products.map((product) => (
            <div className="col g-3" key={product.id}>
                <div className="card h-100 card_shadow">
                  <img src={product.image} className="card-img-top p-4 object-fit-contain bg-light card_items_img" alt="Product image" />
                  <div className="card-body d-flex flex-column justify-content-between gap-2">
                    <h5 className="card-title card_item_title fw-semibold">{product.title}</h5>
                    <p className="card-subtitle text-body-secondary">{product.category}</p>
                    <p className="card-text card_items_description">
                     {product.description}
                    </p>
                    <p className="">{product.rating.rate} ⭐ - {product.rating.count} reviews</p>
                    <p className="fs-3 fw-bold mb-0">{product.price} $</p>
                  </div>
                </div>
            </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
