import { configureStore, createSlice } from "@reduxjs/toolkit"

let user = createSlice({
  name: "user",
  initialState: "tak"
})
let cart = createSlice({
  name: "cart",
  initialState: [
    {
      id: 0,
      name: "알루카 후디드 다운 자켓",
      count: 1,
      price: 490000,
    }, {
      id: 1,
      name: "알루카 크롭 다운 베스트",
      count: 1,
      price: 260000,
    }, {
      id: 2,
      name: "컨투어 다운 자켓",
      count: 1,
      price: 420000,
    },
  ]
})

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
});