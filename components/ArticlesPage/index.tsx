import Card from "@components/Card";
import useSWR from "swr";
import fetcher from "util/fetch";

import * as Styles from "./styles";

const ArticlesPage = () => {
  const { data: sfnewsArticle } = useSWR(
    `https://api.spaceflightnewsapi.net/v3/articles`,
    fetcher
  );
  return (
    <Styles.Container>
      <Styles.Header>Articles</Styles.Header>
      <Styles.CardContainer>
        {sfnewsArticle ? (
          sfnewsArticle.map((news: any) => <Card key={news.id} data={news} />)
        ) : (
          <div>Loading...</div>
        )}
      </Styles.CardContainer>
    </Styles.Container>
  );
};

export default ArticlesPage;
