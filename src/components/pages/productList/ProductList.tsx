import { FC, Suspense, useEffect } from "react";
import ProductCard from "../../molecules/ProductCard";
import Search from "../../common/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setProductList,
} from "../../../store/reducers/productListReducer";
import Loading from "../../common/Loading";

interface ProductListProps {}

export const ProductList: FC<ProductListProps> = ({}) => {
  const { products, loading } = useSelector((state: any) => state.productList);

  const dispatch = useDispatch();

  const fetchProductList = async () => {
    dispatch(setLoading(true));
    await fetch(` https://dummyjson.com/products?limit=30&skip=30`)
      .then((response) => response.json())
      .then((actualData) => {
        dispatch(setProductList(actualData.products));
        dispatch(setLoading(true));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(setLoading(true));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Search />
      <Suspense fallback={"loading..."}>
        <div className="product-list">
          {products.map((product: any) => {
            return <ProductCard key={product?.id} product={product} />;
          })}
        </div>
      </Suspense>
    </div>
  );
};

export default ProductList;
