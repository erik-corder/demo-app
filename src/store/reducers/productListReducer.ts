import { createSlice } from "@reduxjs/toolkit";

interface productListProps {
  products: any[];
  loading: boolean;
}

export const initialState: productListProps = {
  products: [],
  loading: false,
};

export const productListReducer = createSlice({
  name: "productList",
  initialState,
  reducers: {
    setProductListState(state: any, { payload }: any) {
      state.products = payload;
    },
    setLoadingState(state: any, { payload }: any) {
      state.loading = payload;
    },
  },
});

export const { setProductListState, setLoadingState } =
  productListReducer.actions;

export const setProductList: any =
  (payload: any, cb: any = () => {}) =>
  async (dispatch: any) => {
    dispatch(setProductListState(payload));
    return cb(payload);
  };

export const setLoading: any =
  (payload: any, cb: any = () => {}) =>
  async (dispatch: any) => {
    dispatch(setLoadingState(payload));
    return cb(payload);
  };

export default productListReducer.reducer;
