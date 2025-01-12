//SDK利用準備
import { createClient, type MicroCMSImage, type MicroCMSListContent, type MicroCMSQueries } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

//型定義
export type News = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  image:{
    url: string;
  }
  tag: string;
  intro: string;
  name: string;
  content: string;
};
export type NewsResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: News[];
  id: string;
};

export const getNewss = async (queries?: any) => {
  return await client.get<NewsResponse>({ 
      endpoint: "news", 
      queries 
  });
};

export const getNewsDetail = async (contentId: string, queries?: any) => {
return await client.getListDetail<News>({
  endpoint: "news",
  contentId,
  queries,
});
};

export const getTags = async (contentId: string, queries?: any) => {
  return await client.get<News>({
    endpoint: "news",
    contentId,
    queries
  });
};