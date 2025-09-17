import { lazy, memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import ProductDetail from "./Product-detail";
import Blog from "./blog";
import ContactUs from "./contact-us";
import Wishes from "./wishes";
import Cart from "./cart";
import Notfound from "./notfound";
import AccountPofile from "./account/components/AccountProfile";
import AccountAddress from "./account/components/Address";
import AccountOrders from "./account/components/AccountOrders";
import AccountWishlist from "./account/components/AccountWIshlist";
import Reviews from "./Product-detail/components/Reviews";
import Questions from "./Product-detail/components/Questions";
import AdditionalInfo from "./Product-detail/components/AdditionalInfo";
import SuspenseLoading from "../components/SuspenseLoading";
import Search from "./search";

const MainLayout = lazy(() => import("./layout"));
const Home = lazy(() => import("./home"));
const Shop = lazy(() => import("./shop"));
const SignIn = lazy(() => import("./sign-in"));
const Account = lazy(() => import("./account"));
const Auth = lazy(() => import("./auth"));

const AppRouter = () => {
  return (
    <Suspense fallback={<SuspenseLoading />}>
      {useRoutes([
        // puplic route with layout
        {
          path: "/",
          element: <MainLayout />,
          children: [
            { index: true, element: <Home /> },
            {
              path: "product/:id",
              element: <ProductDetail />,
              children: [
                { index: true, element: <Reviews /> },
                { path: "reviews", element: <Reviews /> },
                { path: "questions", element: <Questions /> },
                { path: "additional-info", element: <AdditionalInfo /> },
              ],
            },
            { path: "shop", element: <Shop /> },
            { path: "search", element: < Search/> },
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
              children: [
                {
                  path: "account",
                  element: <Account />,
                  children: [
                    { index: true, element: <AccountPofile /> },
                    { path: "address", element: <AccountAddress /> },
                    { path: "orders", element: <AccountOrders /> },
                    { path: "wishlist", element: <AccountWishlist /> },
                  ],
                },
              ],
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
