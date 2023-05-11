import { createSlice } from "@reduxjs/toolkit";

interface productProps {
  product: any[];
  loading: boolean;
}

export const initialState: productProps = {
  product: [],
  loading: false,
};

export const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductState(state: any, { payload }: any) {
      state.product = payload;
    },
    setLoadingState(state: any, { payload }: any) {
      state.loading = payload;
    },
  },
});

export const { setProductState, setLoadingState } = productReducer.actions;

export const setProduct: any =
  (payload: any, cb: any = () => {}) =>
  async (dispatch: any) => {
    dispatch(setProductState(payload));
    return cb(payload);
  };

export const setLoading: any =
  (payload: any, cb: any = () => {}) =>
  async (dispatch: any) => {
    dispatch(setLoadingState(payload));
    return cb(payload);
  };

export default productReducer.reducer;
