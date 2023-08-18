export interface HomePageItem {
  id: string;
  title: string;
  url: string;
  commentsRead?: number;
}

export const MockHomePageItem: HomePageItem = {
  id: '1',
  title: 'title',
  url: 'url',
  commentsRead: 0
};
