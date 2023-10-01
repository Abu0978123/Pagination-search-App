const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (curElem) => curElem.objectID !== action.payload
        ),
      };

    // here is the search function data
    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload,
      };

    // here is the pagination cases
    case "PRE_PAGE":
      let pageDic = state.page - 1;
      if (pageDic <= 0) {
        pageDic = 0;
      }
      return {
        ...state,
        page: pageDic,
      };

    case "NEXT_PAGE":
      let pageNumInc = state.page + 1;
      if (pageNumInc >= state.nbPages) {
        pageNumInc = 0;
      }
      return {
        ...state,
        page: pageNumInc,
      };
  }
};

export { reducer };
