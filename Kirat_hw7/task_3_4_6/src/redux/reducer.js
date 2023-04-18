const initialState = 0;

const reducer = (state = initialState, action) => {
  if(action.type === "INCREMENT"){
    return state + 1;
  }
}

export default reducer;