import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

export default function SingleProduct() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();


  

  const api_url = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    axios
      .get(api_url)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        navigate("/404");
        console.log(err);
        
      });
  }, [id, navigate]);



  return (
    <>
    {product === null && <Loader/>}

      {product !== null && (
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
                <Link
                  className="btn btn-primary rounded-pill mx-3 px-4 py-2"
                  to={"/CiaoLuigi&Camilla"}
                >
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
