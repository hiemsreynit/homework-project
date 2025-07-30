import { createBrowserRouter, RouterProvider } from "react-router";

import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import LoginComponent from "./components/authencication/LoginComponent";
import SignupComponent from "./components/authencication/SignupComponent";
import AuthLayout from "./layouts/AuthLayout";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "about",
    Component: AboutPage,
  },
  {
    path: "contact",
    Component: ContactPage,
  },
  {
    path: "product",
    Component: ProductPage,
  },
  {
    path: "product/:id",
    Component: ProductDetailPage,
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: LoginComponent,
      },
      {
        path: "signup",
        Component: SignupComponent,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <App />
  </Provider>
);
