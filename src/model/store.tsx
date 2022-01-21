import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer";

export const store: Store<RootReducer, Action> & {
  dispatch: DispatchType;
} = createStore(rootReducer, applyMiddleware(thunk));
