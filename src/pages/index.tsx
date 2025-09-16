import { lazy, memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import ProductDetail from "./Product-detail";
import Blog from "./blog";
import ContactUs from "./contact-us";
import Wishes from "./wishes";
import Cart from "./cart";
import Notfound from "./notfound";

const MainLayout = lazy(() => import("./layout"));
const Home = lazy(() => import("./home"));
const Shop = lazy(() => import("./shop"));
const SignIn = lazy(() => import("./sign-in"));
const Account = lazy(() => import("./account"));
const Auth = lazy(() => import("./auth"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {useRoutes([
        // puplic route with layout
        {
          path: "/",
          element: <MainLayout />,
          children: [
            { index: true, element: <Home /> },
            { path: "product/:id", element: <ProductDetail /> },
            { path: "shop", element: <Shop /> },
            { path: "blog", element: <Blog /> },
            { path: "contact", element: <ContactUs /> },
            { path: "wishes", element: <Wishes /> },
            { path: "cart", element: <Cart /> },
          ],
        },
        // private route
        {
          path: "/",
          element: <Auth />,
          children: [
            {
              path: "",
              element: <MainLayout />,
              children: [{ path: "account", element: <Account /> }],
            },
          ],
        },
        // puplic route without layout
        { path: "/sign-in", element: <SignIn /> },
        { path: "/*", element: <Notfound /> },
      ])}
    </Suspense>
  );
};

export default memo(AppRouter);
