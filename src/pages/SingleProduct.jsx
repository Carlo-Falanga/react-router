import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import  axios  from "axios";
import { Link } from "react-router-dom";

export default function SingleProduct() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const api_url = `https://fakestoreapi.com/products/${id}`;

  useEffect(() =>{
    axios.get(api_url)
    .then(data =>{
        setProduct(data.data)
        
    })
  }, [])

  console.log(product);
  

  return <>
    <section>
        <div className="container">

        <div className="row row-cols-1 row-cols-lg-2 text-center text-lg-start g-5 my-5 py-5">
            <div className="col">
                <img className="w-75" src={product.image} alt="" />
            </div>
            <div className="col">
                <h3>{product.title}</h3>
                <span className="fw-bold">{product.price} $</span>
                <p className="py-4">{product.description}</p>
                <Link className='btn btn-primary px-5 py-2' to={'/products'}>Add to cart</Link>
            </div>
        </div>

        </div>
    </section>
  </>;
}
