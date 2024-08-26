const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;


const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action creator function

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First Redux action",
  };
};

const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
    info: "Second Redux action",
  };
};

const cakeState = {
  numOfCakes: 10,
};

const iceCreamState = {
  numOfIceCream: 10,
};

const cakeReducer = (state = cakeState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = iceCreamState, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default: return state;
  }
};  

const rootReducers = combineReducers({
    iceCream : iceCreamReducer,
    cake : cakeReducer
});

const store = createStore(rootReducers);

console.log("Initial State:", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state:", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyCake());

unsubscribe();
