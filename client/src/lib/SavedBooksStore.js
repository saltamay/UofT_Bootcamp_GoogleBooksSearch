import React, { createContext, useReducer, useContext } from 'react';

const SavedBooksContext = createContext();
const { Provider } = SavedBooksContext;

const reducer = (state, action) => {
  switch (action.type) {
    // case 'add':
    //   return [
    //     ...state,
    //     {
    //       id: state.length * Math.random(),
    //       name: action.name
    //     }
    //   ];
    // // Bonus: Remove a todo from the list.
    // case 'remove':
    //   return state.filter((_, index) => {
    //     return index !== action.index;
    //   });
    default:
      return [...state, ...action.data.books];
  }
};

const SavedBooksProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, value);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useSavedBooksContext = () => {
  return useContext(SavedBooksContext);
};

export { SavedBooksProvider, useSavedBooksContext };
