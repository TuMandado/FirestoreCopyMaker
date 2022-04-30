const initialState = {
  isLoading: false,
  databases: [],
  collections: [],
};

//dispatch(setUser(user))

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_COLLECTIONS":
      return {
        ...state,
        collections: action.payload,
      };
    case "SET_DATABASES":
      return {
        ...state,
        databases: action.payload,
      };
    default:
      return state;
  }
}
