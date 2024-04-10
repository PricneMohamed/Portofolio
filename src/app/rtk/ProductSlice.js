const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export const produceFetch = createAsyncThunk(
  "ProductSlice/produceFetch",
  async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data;
  }
);
export const ProductSlice = createSlice({
  initialState: [],
  name: "ProductSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(produceFetch.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = ProductSlice.actions;
export default ProductSlice.reducer;
