import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSearch: false,
    isEdit: false,
    isPopup: false,
    placeholder: '',
    cartList: [],
    favList: []
  },
  mutations: {
    search(state) {
      state.isSearch = !state.isSearch
    },
    place(state, payload) {
      state.placeholder = payload
    },
    edit(state) {
      if (state.cartList.length === 0) {
        state.isEdit = false
      } else {
        state.isEdit = !state.isEdit
      }
    },
    popup(state) {
      state.isPopup = !state.isPopup
    },
    addToCart(state, payload) {
      let shopIndex = state.cartList.findIndex(item => item.shopName === payload.shopName)
      if (shopIndex === -1) {
        state.cartList.unshift({
          shopName: payload.shopName,
          shopLink: payload.shopLink,
          shopChecked: payload.shopChecked,
          goodsList: new Array(payload.item)
        })
      } else {
        let goodIndex = state.cartList[shopIndex].goodsList.findIndex(item => item.skuId === payload.item.skuId)
        if (goodIndex === -1) {
          state.cartList[shopIndex].goodsList.unshift(payload.item)
        } else {
          state.cartList[shopIndex].goodsList[goodIndex].num += payload.item.num
        }
      }
    },
    changeNum(state, payload) {
      state.cartList[payload.shopIndex].goodsList[payload.goodIndex].num = payload.num
    },
    checkGood(state, payload) {
      state.cartList[payload.shopIndex].goodsList[payload.goodIndex].goodChecked = !state.cartList[payload.shopIndex].goodsList[payload.goodIndex].goodChecked
    },
    checkShop(state, payload) {
      if (state.cartList[payload.shopIndex].shopChecked) {
        state.cartList[payload.shopIndex].goodsList.forEach(item => item.goodChecked = false)
      } else {
        state.cartList[payload.shopIndex].goodsList.forEach(item => item.goodChecked = true)
      }
      state.cartList[payload.shopIndex].shopChecked = !state.cartList[payload.shopIndex].shopChecked
    },
    changeCheck(state, payload) {
      state.cartList[payload.shopIndex].shopChecked = payload.checked
    },
    removeFromCart(state) {
      if (state.cartList.every(item => item.shopChecked === true)) {
        state.cartList = []
      } else {
        state.cartList.forEach(item => {
          if (item.shopChecked) {
            item.goodsList = []
          } else {
            let temp = item.goodsList.filter(item => item.goodChecked === false)
            item.goodsList = temp
          }
        })
      }
    },
    cartInit(state) {
      state.isEdit = false;
      state.isPopup = false;
      state.cartList.forEach(item => {
        item.shopChecked = false;
        item.goodsList.forEach(item => item.goodChecked = false)
      })
    },
    addToFav(state, payload) {
      let goodIndex = state.favList.findIndex(item => item.id === payload.id)
      if (goodIndex === -1) {
        state.favList.unshift(payload)
      } else {
        state.favList.splice(goodIndex, 1);
      }
    },
  },
  getters: {
    shopCheckAll: (state) => (index) => {
      return state.cartList[index].goodsList.every(item => item.goodChecked === true)
    },
  },
  actions: {},
  modules: {}
});
