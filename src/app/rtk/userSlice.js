const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export const userFetching = createAsyncThunk(
  "userSlice/userSlice",
  async () => {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    return data;
  }
);

export const userSlice = createSlice({
  initialState: [],
  name: "userSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userFetching.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = userSlice.actions;
export default userSlice.reducer;
