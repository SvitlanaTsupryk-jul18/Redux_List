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







/////test task



///// variant2

// const loadingReducer = (state = [], action) => {
//     switch (action.type) {
//         case "SET_USERS":
//             return {
//                 ...state,
//                 users: action.users,
//             }
//         default:
//             return state;
//     }
// };

// const paginationReducer = (state = 1, action) => {
//     switch (action.type) {
//         case "CHANGE_PAGE":
//             let value = action.value;
//             if (!action.target === "button") {
//                 return state
//             }
//             if (value === "next") {
//                 if (state < 4) {
//                     return {
//                         currentPage: state + 1
//                     }
//                 } else return state;
//             }
//             if (value === "prev") {
//                 if (state > 1) {
//                     return {
//                         currentPage: state - 1
//                     }
//                 } else return state;
//             }
//             return {
//                 currentPage: +value
//             }
//         default:
//             return state;
//     }
// };

// const reducer = (state = {}, action) => {
//     return {
//         users: loadingReducer(state.users, action),
//         currentPage: paginationReducer(state.currentPage, action)
//     }
// };


/// var3
// import { createStore, combineReducers } from 'redux';

// export const setUsers = (users) => {
//     return {
//         type: "SET_USERS",
//         users: users,
//     };
// };

// export const changePage = (event) => {
//     return {
//         type: "CHANGE_PAGE",
//         value: event.target.value,
//     };
// };
// import loadingReducer from './redux/users'
// import paginationReducer from './redux/p'

// const reducer2 = combineReducers({
//   users: loadingReducer,
//   currentPage: paginationReducer
// });