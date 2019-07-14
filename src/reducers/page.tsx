// import Page from 'src/data/page';

export const initialPageState = {
  title: "",
    meta: {
      title: ""
    }
};

export function pageReducer(state, action) {
  switch (action.type) {
    case 'PAGE_TITLE':
      return {
        ...state,
        title: action.payload.title,
      };
    case 'RESET':
      return {
        ...initialPageState
      };
    default:
      return state;
  }
}