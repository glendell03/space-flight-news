import Card from "@components/Card";
import SeeMoreBtn from "@components/SeeMoreBtn";
import useSWR from "swr";
import fetcher from "util/fetch";

import * as Styles from "./styles";

const MainPage = () => {
  const { data: sfnewsArticle } = useSWR(
    `https://api.spaceflightnewsapi.net/v3/articles`,
    fetcher
  );

  const { data: sfnewsBlog } = useSWR(
    `https://api.spaceflightnewsapi.net/v3/blogs`,
    fetcher
  );

  const { data: sfnewsReport } = useSWR(
    `https://api.spaceflightnewsapi.net/v3/reports`,
    fetcher
  );

  return (
    <Styles.Container>
      <Styles.Header>Space flight News</Styles.Header>

      <Styles.SubHeader>Articles</Styles.SubHeader>
      <Styles.CardContainer>
        {sfnewsArticle ? (
          <>
            {sfnewsArticle.slice(0, 3).map((news: any) => (
              <Card key={news.id} data={news} />
            ))}
            <SeeMoreBtn page="articles" />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </Styles.CardContainer>

      <Styles.SubHeader>Blog</Styles.SubHeader>
      <Styles.CardContainer>
        {sfnewsBlog ? (
          <>
            {sfnewsBlog.slice(0, 3).map((news: any) => (
              <Card key={news.id} data={news} />
            ))}
            <SeeMoreBtn page="blogs" />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </Styles.CardContainer>

      <Styles.SubHeader>Report</Styles.SubHeader>
      <Styles.CardContainer>
        {sfnewsReport ? (
          <>
            {sfnewsReport.slice(0, 3).map((news: any) => (
              <Card key={news.id} data={news} />
            ))}
            <SeeMoreBtn page="reports" />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </Styles.CardContainer>
    </Styles.Container>
  );
};

export default MainPage;
