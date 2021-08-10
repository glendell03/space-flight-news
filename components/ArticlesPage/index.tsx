import Card from "@components/Card";
import SeeMoreBtn from "@components/SeeMoreBtn";
import FadeIn from "@components/Transitions/fadeIn";
import Loading from "@components/Transitions/loader";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "util/fetch";

import * as Styles from "./styles";

const ArticlesPage = ({ isMainPage = false }) => {
  const router = useRouter();
  const { data: sfnewsArticle } = useSWR(
    `https://api.spaceflightnewsapi.net/v3/articles`,
    fetcher
  );

  return (
    <Styles.Container>
      <Styles.Header>Articles</Styles.Header>

      <Styles.CardContainer>
        {sfnewsArticle ? (
          <FadeIn className="fade">
            {isMainPage ? (
              <>
                {sfnewsArticle.slice(0, 3).map((news: any) => (
                  <Card
                    key={news.id}
                    data={news}
                    onClick={() => router.push(`/articles/${news.id}`)}
                  />
                ))}
                <SeeMoreBtn page="articles" />
              </>
            ) : (
              sfnewsArticle.map((news: any) => (
                <Card
                  key={news.id}
                  data={news}
                  onClick={() => router.push(`/articles/${news.id}`)}
                />
              ))
            )}
          </FadeIn>
        ) : (
          <Loading />
        )}
      </Styles.CardContainer>
    </Styles.Container>
  );
};

export default ArticlesPage;
