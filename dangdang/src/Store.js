import { configureStore, createSlice } from "@reduxjs/toolkit"

let user = createSlice({ //생성
  name: "user",
  initialState: "나래",
  reducers: { //state수정하는 함수
    changeName(state){
      return '탁' + state;
    }
  }
})
export let { changeName } = user.actions; //동작내보내기

let cart = createSlice({
  name: "cart",
  initialState: [
    {
      id: 0,
      name: "알루카 후디드 다운 자켓",
      count: 1,
      price: 490000,
      thumbs: "../img/prd1.jpg"
    }, {
      id: 1,
      name: "알루카 크롭 다운 베스트",
      count: 1,
      price: 260000,
      thumbs: "../img/prd2.jpg"
    }, {
      id: 2,
      name: "컨투어 다운 자켓",
      count: 1,
      price: 420000,
      thumbs: "../img/prd3.jpg"
    }, {
      id: 3,
      name: "알루카 다운 베스트",
      count: 1,
      price: 290000,
      thumbs: "../img/prd4.jpg"
    }, {
      id: 4,
      name: "알루카 후디드 다운 자켓",
      count: 1,
      price: 490000,
      thumbs: "../img/prd5.jpg"
    }, {
      id: 5,
      name: "알루카 다운 베스트",
      count: 1,
      price: 290000,
      thumbs: "../img/prd6.jpg"
    },
  ],
  reducers: {
    addCount(state, action){
      state[action.payload].count++
    }
  }
})
export let { addCount } = cart.actions; 

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
});