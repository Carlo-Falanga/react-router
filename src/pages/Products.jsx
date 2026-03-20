import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {

    const [products, setProducts] = useState([])

    function getProducts(){

        axios
          .get("https://fakestoreapi.com/products")
          .then((data) =>{
              setProducts(data.data)
          });
    }

    console.log(products);
    

    useEffect(getProducts, [])

  return <main>
    <section>
        <div className="container">
            <div className="card">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the car's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
        </div>
    </section>
  </main>;
}
