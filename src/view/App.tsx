import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./scss/index.scss";
import { useSelector, shallowEqual } from "react-redux";
import { SideBar } from "./2-molecules/SideBar";
import { useDispatch } from "react-redux";
import * as controller from "../controller";

export function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pages = useSelector(
    (state: RootReducer) => state.pages,
    shallowEqual
  );

  const currentId = useSelector(
    (state: RootReducer) => state.id,
    shallowEqual
  );

  const currentPage = pages.get(currentId);
  useEffect(() => {
    navigate(currentPage.url);
  }, [currentPage, navigate]);

  const clickHandler = (
    controller: (event: React.SyntheticEvent) => void
  ) => {
    dispatch(controller);
  };

  return (
    <div className="App">
      <SideBar
        controller={controller}
        clickHandler={clickHandler}
        currentId={currentId}
        pages={pages}
      />
    </div>
  );
}
