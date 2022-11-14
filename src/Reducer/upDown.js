const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

const startState = 0;
const savethenum = (state = startState, action) => {
  return { firstVal: state + action.type};
};

export default changeTheNumber;

export { savethenum };
