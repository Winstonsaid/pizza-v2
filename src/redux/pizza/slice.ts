import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pizza, PizzaSliceState, Status } from "../pizza/types";
import { fetchPizzas } from "./asyncAction";

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchPizzas.pending, (state) => {
  //       state.status = "loading";
  //       state.items = [];
  //     })
  //     .addCase(fetchPizzas.fulfilled, (state, action) => {
  //       state.items = action.payload;
  //       state.status = "success";
  //     })
  //     .addCase(fetchPizzas.rejected, (state) => {
  //       state.status = "error";
  //       state.items = [];
  //       console.error("Ошибка загрузки пицц");
  //     });
  // },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
