// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "../components/HeaderFooter/NavbarComponent";
import { useGetProductQuery } from "../redux/api";
import TestCounterComponent from "../components/TestCounterComponent";
import DataTableComponent from "../components/DataTable";
// import { da } from "zod/locales";
import DataTableProduct from "../components/DataTableProduct";
// import { da } from "zod/v4/locales";

export default function ProductPage() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products/category/groceries")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.products));
  // }, []);


  const { data, isLoading, error } = useGetProductQuery();

  if (isLoading) return <div className="h-screen flex items-center justify-center">
    <p>Loading...</p>
  </div>;
  if (error) return <P>Something went wrong!</P>;


  return (
    <>
      <section>
        <NavbarComponent />
      </section>
      <section className="flex flex-col items-center gap-3 pt-25 md:pt-30 pb-10 md:pb-20 px-10 md:px-20">
        <h1 className="text-2xl md:text-4xl font-bold">Shopping in peace</h1>
        <p>
          Discover fresh, quality groceries carefully selected to make your
          shopping experience easy, reliable, and stress-free.
        </p>
      </section>
      {/* <section className="px-10 md:px-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <section className="bg-white shadow-lg rounded-xl p-4 hover:scale-102 transition-transform duration-300">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-contain rounded"
              />
              <section className="flex flex-col gap-2">
                <section className="flex flex-col justify-center">
                  <h2 className="text-xl font-semibold mt-2">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </p>
                </section>
                <section className="flex items-center gap-1">
                  <p className="text-[13px] text-gray-600">Rating</p>
                  <p className="">({product.rating})</p>
                </section>
                <section className="flex justify-between items-center">
                  <p className="text-green-600 text-lg font-bold">
                    ${product.price}
                  </p>
                  <p className="text-red-500">-{product.discountPercentage}%</p>
                </section>
                <Link>
                  <TestCounterComponent />
                </Link>
              </section>
            </section>
          </Link>
        ))}
      </section> */}
      <DataTableProduct/>
      {/* <DataTableComponent props={data.products} /> */}
      {/* <DataTableComponent data={data} /> */}
      
    </>
  );
}
