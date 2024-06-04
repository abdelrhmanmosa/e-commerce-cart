import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";
import { RootState } from "../../store";
import axiosInstance from "../../../config/axios.config";

interface productState {
  loading: boolean;
  data: IProduct[];
  error: null;
}
const initialState: productState = {
  loading: true,
  data: [],
  error: null,
};

export const gitProductList = createAsyncThunk(
  "product/gitProductList",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axiosInstance.get(
        "/products?limit=12&select=title,price,thumbnail"
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    //** Pending
    [`${gitProductList.pending}`]: (state) => {
      state.loading = true;
    },
    //** Fulfilled
    [`${gitProductList.fulfilled}`]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    //** Reject
    [`${gitProductList.rejected}`]: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

export const productSelector = ({ product }: RootState) => product;
export default productSlice.reducer;
