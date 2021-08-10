import Card from "@components/Card";
import useSWR from "swr";
import fetcher from "util/fetch";

import * as Styles from "./styles";

const BlogsPage = () => {
  const { data: sfnewsBlog } = useSWR(
    `https://api.spaceflightnewsapi.net/v3/blogs`,
    fetcher
  );
  return (
    <Styles.Container>
      <Styles.Header>Blog</Styles.Header>
      <Styles.CardContainer>
        {sfnewsBlog ? (
          sfnewsBlog.map((news: any) => <Card key={news.id} data={news} />)
        ) : (
          <div>Loading...</div>
        )}
      </Styles.CardContainer>
    </Styles.Container>
  );
};

export default BlogsPage;
