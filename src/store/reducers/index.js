const initialState = {
  isLoading: true,
  databases: null,
  collections: null,
  selectedDatabases: [],
  selectedCollections: [],
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
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_SELECTED_DATABASES":
      return {
        ...state,
        selectedDatabases: action.payload,
      };
    case "SET_SELECTED_COLLECTIONS":
      return {
        ...state,
        selectedCollections: action.payload,
      };
    default:
      return state;
  }
}
