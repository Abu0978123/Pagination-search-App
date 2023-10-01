import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../hooks/Reducer";

const AppContext = createContext();

export default function Context({ children }) {
  const API = "https://hn.algolia.com/api/v1/search?";
  const initialValue = {
    isLoading: true,
    query: " ",
    nbPages: 0,
    page: 0,
    hits: [],
  };
  const [state, dispatch] = useReducer(reducer, initialValue);

  const getData = async (URL) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(URL);
      const data = await res.json();
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
      // console.log("🚀 ~ file: Stories.jsx:9 ~ getData ~ data:", data);
    } catch (error) {
      // console.log("🚀 ~ file: Stories.jsx:12 ~ getData ~ error:", error);
    }
  };

  // remove function on remove button
  const RemoveData = (post_ID) => {
    dispatch({ type: "REMOVE_POST", payload: post_ID });
  };

  // here is the search function data
  const SearchPost = (Search_data) => {
    dispatch({ type: "SEARCH_POST", payload: Search_data });
  };

  // pagination
  const PaginationNext = () => {
    dispatch({ type: "NEXT_PAGE" });
  };

  // pagination
  const PaginationPre = () => {
    dispatch({ type: "PRE_PAGE" });
  };

  useEffect(() => {
    getData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        RemoveData,
        SearchPost,
        PaginationNext,
        PaginationPre,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// its my custom hook for context hooks
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, useGlobalContext };
