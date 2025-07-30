import { CreateProductFormComponent } from "../components/Form/CreateProductForm";
import NavbarComponent from "../components/HeaderFooter/NavbarComponent";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <>
      <section className="">
        <NavbarComponent />
      </section>
      <section className="pt-20 md:pt-30 md:flex justify-between px-10 md:px-20">
        <section className="w-1/2 flex flex-col gap-6 justify-center">
          <section className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-green-600 via-lime-500 to-green-400 text-transparent bg-clip-text drop-shadow-md">
              Skip the Line. Shop Online.
            </h1>
            <p className="text-md md:text-lg md:line-clamp-2 text-gray-600 p-0">
              Discover handpicked groceries delivered fresh to your door.
              Healthy, affordable, and just a click away — shop smarter today.
            </p>
          </section>
          <Link to="/product">
            <button className="bg-emerald-500 text-white text-md rounded-xl hover:scale-103 w-fit px-10 py-2 transition-transform duration-300">
              Shop now
            </button>
          </Link>
        </section>
        <figure>
          <img src="/hero-img.png" alt="" />
        </figure>
      </section>
      <section className="flex justify-center w-full">
        <CreateProductFormComponent />
      </section>
    </>
  );
}
