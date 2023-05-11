import { ReactNode } from "react";
import { ProductList } from "../components/pages/productList/ProductList";
import Layout from "../components/layouts/Layout";
import SingleProduct from "../components/pages/singleProduct/SingleProduct";

interface RoutProps {
  path: string;
  layout?: ReactNode | any;
  component?: ReactNode | any;
  title?: string;
}
export const routes: RoutProps[] = [
  {
    path: "/",
    component: ProductList,
    layout: Layout,
    title: "Product List",
  },
  {
    path: "/product/:productId",
    component: SingleProduct,
    layout: Layout,
    title: "Product view"
  }
];

export default routes;
