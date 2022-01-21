import React from "react";
import { useLocation } from "react-router-dom";

type Props = {
  pages: Pages;
  clickHandler: ClickHandler;
  controller: ControlerType;
  currentId: PageId;
};

export const SideBar = (props: Props) => {
  const { pages, clickHandler, controller, currentId } = props;
  if (!pages) return null;
  return (
    <div className="sideBar-wrapper">
      <div className={"sideBar"}>
        {pages.entrySeq().map((_page: [Id, Page]) => {
          const [id, page] = _page;
          const selectedPage =
            currentId === id ? "sideBar-selected" : "sideBar-title";
          return (
            <div
              key={page.key}
              id={id}
              className={`${selectedPage}`}
              onClick={(event) => clickHandler(controller.updateId(event))}
            >
              {" "}
              {page.title}
            </div>
          );
        })}
      </div>
      <div className={"sideBar-Bar"}> </div>
    </div>
  );
};

//
