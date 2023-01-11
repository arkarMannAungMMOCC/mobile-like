import { createSlice } from '@reduxjs/toolkit';
import { carousels, dumpyItems, categories } from '@const';
import Local from '../localStroage';
const local = Local({});
const noUser = {
  id: '',
  name: '',
  phone: '',
  address: '',
  points: '',
  token: ''
}
const initialState = {
  orderHistorys: [],
  items: dumpyItems,
  // About Promotions display on carousel
  promotions: carousels,
  // Filter by Promotions Item Only having discount
  promotionItems: dumpyItems.filter(({ detail }) => detail.discount > 0),
  // Filter by Popular Item Only
  popularItems: dumpyItems,
  //categories data used on HomePage & web View Component's TabBar
  categories: categories,
  // cartCount: Local.getCart()? Local.getCart().length: 0 ,
  cartCount: local.getCart() ? local.getCart().length : 0,
  user: local.getUser() ? local.getUser() : noUser
  // { id,name,phone,address,points,token }
}

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setCartCount: (state, action) => {
      state.cartCount = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setItems: (state, action) => {
      state.items = action.payload;
      //temp
      state.popularItems = action.payload;
      state.promotionItems = action.payload.filter(({ detail }) => detail.discount > 0);
    },
    setPromotions: (state, action) => {
      state.promotions = action.payload;
    },
    setPopularItems: (state, action) => {
      state.popularItems = action.payload;
    },
    setOrderHistorys: (state, action) => {
      state.orderHistorys = action.payload;
    }
  },
});

export const { setCartCount, setUser, setItems, setPopularItems, setOrderHistorys, setPromotions } = rootSlice.actions;
export default rootSlice.reducer;