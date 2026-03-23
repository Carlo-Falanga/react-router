import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import  axios  from "axios";

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
        <div className="row">
            <div className="col">
                <h3>{product.title}</h3>
            </div>
        </div>
    </section>
  </>;
}
