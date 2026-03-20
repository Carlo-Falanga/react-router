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
      <section>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
              {products.map((product) => (
            <div className="col g-4" key={product.id}>
                <div className="card h-100">
                  <img src={product.image} className="card-img-top p-4 object-fit-contain bg-light card_items_img" alt="Product image" />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title pb-0 mb-0 card_item_title">{product.title}</h5>
                    <p className="card-subtitle text-body-secondary pt-0 my-0">{product.category}</p>
                    <p className="card-text card_items_description my-0">
                     {product.description}
                    </p>
                    <p className="my-0">Rating: {product.rating.rate} Stars </p>
                    <p>Reviews: {product.rating.count}</p>
                    <p className="fs-3">{product.price} $</p>
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
