import { Record, Map as ImMap } from "immutable";
import { v4 as uuidv4 } from "uuid";
import { pages as pageData } from "../1-data/index";
export interface PageInterface {}

const defaultView: Page = {
  id: "",
  key: uuidv4(),
  title: "",
  intro: "",
  paragraph: "",
  url: "",
};
export class PageModel
  extends Record(defaultView)
  implements PageInterface
{
  static fromData(page: Page, id: string) {
    return new PageModel({ ...page, id, key: uuidv4() });
  }
}

const loadPages = (pageData: Object) => {
  return Object.entries(pageData).reduce((acc, [key, value]) => {
    return { ...acc, [key]: PageModel.fromData(value as Page, key) };
  }, {});
};

export const Pages = ImMap({ ...loadPages(pageData) });
