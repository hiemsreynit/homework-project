import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginComponent from "../components/authencication/LoginComponent";

export default function AuthLayout() {
  return (
    <>
      <section className="flex justify-center items-center min-h-screen">
        <div className="">
          <Outlet />
        </div>
      </section>
    </>
  );
}
