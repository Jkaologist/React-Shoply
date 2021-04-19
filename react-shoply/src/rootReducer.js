function rootReducer(state, action) {
  switch(action.type) {
    case "addToCart": {
      return {
        ...state,
        cart: [
          ...state.cart, {...action.cart}
        ]
      }
    }
    case "removeFromCart": {
      const idx = state.cart.findIndex(i => i.name === action.name)
      if (idx === -1) return state;
      const copy = [...state.cart]
      copy.splice(idx, 1)
      return {
        ...state,
        cart: copy
    }
  }
    default:
      return state;
  }
}

export default rootReducer;
