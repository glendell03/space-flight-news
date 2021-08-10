import Card from "@components/Card";
import SeeMoreBtn from "@components/SeeMoreBtn";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "util/fetch";

import * as Styles from "./styles";

const BlogsPage = ({ isMainPage = false }) => {
  const router = useRouter();
  const { data: sfnewsBlog } = useSWR(
    `https://api.spaceflightnewsapi.net/v3/blogs`,
    fetcher
  );
  return (
    <Styles.Container>
      <Styles.Header>Blog</Styles.Header>
      <Styles.CardContainer>
        {sfnewsBlog ? (
          isMainPage ? (
            <>
              {sfnewsBlog.slice(0, 3).map((news: any) => (
                <Card
                  key={news.id}
                  data={news}
                  onClick={() => router.push(`/blogs/${news.id}`)}
                />
              ))}
              <SeeMoreBtn page="blogs" />
            </>
          ) : (
            sfnewsBlog.map((news: any) => (
              <Card
                key={news.id}
                data={news}
                onClick={() => router.push(`/blogs/${news.id}`)}
              />
            ))
          )
        ) : (
          <div>Loading...</div>
        )}
      </Styles.CardContainer>
    </Styles.Container>
  );
};

export default BlogsPage;
