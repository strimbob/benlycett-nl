interface IArticle {
  id: number;
  title: string;
  body: string;
}

type Action = {
  type: string;
  payload: any;
};

type Image = {
  src: string;
  thumbnail: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
};
type Page = {
  title: string;
  intro: string;
  paragraph: string;
  url: string;
  key: string;
  id: string;
  images?: Image[];
  videoLink?: string;
  link?: string;
};

type Id = string;
type PageId = string | null;
type Pages = ImMap<Id, Page>;

type RootReducer = { id: PageId; pages: Pages };

type DispatchType = (args: Action) => Action;

type ControlerType = Record<string, (event: React.SyntheticEvent) => void>;

type ClickHandler = ([k]: any) => void;
