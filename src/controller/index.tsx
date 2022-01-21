import * as ActionTypes from "./actionTypes";

export const updateId =
  (event: React.SyntheticEvent) =>
  (
    dispatch: ({ type, payload }: { type: string; payload: any }) => void,
    getstate: () => RootReducer
  ) => {
    const { id } = event.currentTarget;
    dispatch({ type: ActionTypes.ID_UPDATE, payload: id });
  };
