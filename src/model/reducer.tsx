import * as actionTypes from "../controller/actionTypes";
import { combineReducers } from "redux";
import { Pages } from "./PageModel";

export const PagesReducer = (
  state: Pages = Pages,
  action: Action
): Pages => {
  return state;
};

export const IDReducer = (
  state: PageId = "generator",
  action: Action
): PageId => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.ID_UPDATE:
      return payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  pages: PagesReducer,
  id: IDReducer,
});

export default rootReducer;
export type StoreType = ReturnType<typeof rootReducer>;
