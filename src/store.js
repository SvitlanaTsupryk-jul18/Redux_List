import { createStore } from 'redux';

const store = createStore(reducer, initState);

initState = {
    // query: '',
    sortField: '',
    isSortedAsc: true,
    isLoaded: false,
    todos: [],
    // visibleTodos: [],
};

const reducer = (state = {}, action) => {
    // return {
    //     isLoading: loadingReducer(state.isLoading, action),
    //     products: productsReducer(state.products, action),
    //     basketItems: basketReducer(state.basketItems, action),
    // };
};






// function createStore(reducer, initialState = {}) {
//   let callbacks = [];
//   let state = { ...initialState };
//
//   return {
//     getState() {
//       return state;
//     },
//
//     subscribe(callback) {
//       callbacks.push(callback);
//     },
//
//     dispatch(action) {
//       state = reducer(state, action);
//       callbacks.forEach(f => f());
//     }
//   };
// }