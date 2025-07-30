// src/pages/ProductDetailPage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavbarComponent from "../components/HeaderFooter/NavbarComponent";
import TestCounterComponent from "../components/TestCounterComponent";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <section>
        <NavbarComponent />
      </section>
      <section className="flex flex-col md:flex-row justify-center gap-4 px-10 md:px-20 pt-20 md:pt-30 ">
        <figure className="shadow-xl rounded-lg">
          <img src={product.thumbnail} alt={product.title} />
        </figure>
        <section className="flex flex-col gap-3">
          <section className="flex items-end gap-6">
            <h3 className="text-4xl font-semibold">{product.title}</h3>
            <section>
              <p className="text-gray-500 font-semibold text-xs flex items-center bg-green-200 border-1 border-green-400 px-2 py-1 rounded-2xl ">
                {product.tags}
              </p>
            </section>
          </section>
          <section className="flex gap-5 items-end">
            <p className="text-gray-700 text-xl">Rate ({product.rating})</p>
            <p className="text-blue-500">
              {product.availabilityStatus} - {product.stock} left
            </p>
          </section>
          <p className="text-gray-600 text-xl">{product.description}</p>
          <section className="flex gap-5">
            <p className="text-lg">{product.weight}kg</p>
            <p className="text-lg">Min Order: {product.minimumOrderQuantity}</p>
          </section>
          <section className="flex gap-5">
            <p className="font-semibold text-2xl">${product.price}</p>
            <p className="text-red-500 font-semibold text-2xl">
              -{product.discountPercentage}%
            </p>
          </section>
          <TestCounterComponent/>
        </section>
      </section>
    </>
  );
}
