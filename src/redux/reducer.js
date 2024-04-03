const initialState = {
  product: [],
  basket: JSON.parse(localStorage.getItem("bas")) || [],
  favorite: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, product: action.payload };
    case "ADD_TO_BASKET":
      let findBasket = state.basket.find((el) => el.id === action.payload.id);
      if (!findBasket) {
        let res = [...state.basket, action.payload];
        localStorage.setItem("bas", JSON.stringify(res));
        return { ...state, basket: res };
      }
    case "QUANTITY_PLUS":
      return {
        ...state,
        basket: state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity + 1 }
            : el
        ),
      };
    case "QUANTITY_MINUS":
      return {
        ...state,
        basket: state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
            : el
        ),
      };
    case "ADD_TO_FAVORITE":
      let findFavorite = state.favorite.find(
        (el) => el.id === action.payload.id
      );
      if (findFavorite) {
        return {
          ...state,
          favorite: state.favorite.filter((el) => el.id !== action.payload.id),
        };
      } else {
        return { ...state, favorite: [...state.favorite, action.payload] };
      }
    case "DELETE_BASKET":
      let filterBasket = state.basket.filter(
        (el) => el.id !== action.payload.id
      );
      localStorage.setItem("bas", JSON.stringify(filterBasket));
      return {
        ...state,
        basket: filterBasket,
      };
    default:
      return state;
  }
};
