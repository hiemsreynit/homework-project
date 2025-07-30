import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router";

export default function NavbarComponent() {
  const { value } = useSelector((state) => state.counter);
  return (
    <Navbar
      fluid
      rounded
      className="fixed rounded-none shadow-md bg-white/10 dark backdrop-blur-2xl py-1 px-10 md:px-20 w-full"
    >
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img
          src="/logo.png"
          className="mr-1 h-14 md:h-16"
          alt="Flowbite React Logo"
        />
        <span className="text-md md:text-xl font-bold text-emerald-500">
          GrocyGo
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavLink to="/" className="text-gray-800 dark:text-white">
          Home
        </NavLink>
        <NavLink to="/product" className="text-gray-800 dark:text-white">
          Product
        </NavLink>
        <NavLink to="/about" className="text-gray-800 dark:text-white">
          About
        </NavLink>
        <NavLink to="/contact" className="text-gray-800 dark:text-white">
          Contact
        </NavLink>
      </NavbarCollapse>
      <section className="flex items-center gap-8">
        <section className="flex items-center">
          <NavLink to="" className="text-3xl absolute">
            🛒
          </NavLink>
          <p className="relative right-2 bottom-2 text-sm bg-red-500 h-fit px-2 text-white rounded-2xl">{value}</p>
        </section>
        <button className="hidden md:block bg-red-600 p-1 px-2 md:p-2 rounded-lg w-16 md:w-20">
          <NavLink to="/auth" className="text-white">
            Login
          </NavLink>
        </button>
      </section>
      <button className="md:hidden bg-blue-400 p-1 px-2 md:p-2 rounded-lg w-16 md:w-20">
        <NavLink to="/auth" className="text-white">
          Login
        </NavLink>
      </button>
    </Navbar>
  );
}
