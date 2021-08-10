import ArticlesPage from "@components/ArticlesPage";
import BlogsPage from "@components/BlogsPage";
import Card from "@components/Card";
import ReportsPage from "@components/ReportsPage";

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
