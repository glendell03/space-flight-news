/* eslint-disable @next/next/no-img-element */
import ArticlesPage from "@components/ArticlesPage";
import BlogsPage from "@components/BlogsPage";
import ReportsPage from "@components/ReportsPage";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";

import * as Styles from "./styles";

const MainPage = () => {
  return (
    <Styles.Container>
      <Styles.Header>Space flight News</Styles.Header>
      <ArticlesPage isMainPage />
      <BlogsPage isMainPage />
      <ReportsPage isMainPage />
    </Styles.Container>
  );
};

export default MainPage;
