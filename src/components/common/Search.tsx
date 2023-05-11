import { TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProductList } from "../../store/reducers/productListReducer";
import useDebounce from "../../hooks/useDebounce";

interface SearchProps {}

export const Search: FC<SearchProps> = ({}) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const debouncedValue = useDebounce(value, 300);

  const searchProduct = async () => {
    await fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then((response) => response.json())
      .then((actualData) => dispatch(setProductList(actualData.products)))
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    searchProduct();
  }, [debouncedValue]);

  return (
    <div className="search">
      <TextField
        placeholder="Search Products"
        id="outlined-basic"
        label="Search"
        variant="outlined"
        size="small"
        autoComplete="off"
        className="search-field"
        onChange={(e) => {
          e.preventDefault();
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
