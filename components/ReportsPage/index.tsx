import Card from "@components/Card";
import SeeMoreBtn from "@components/SeeMoreBtn";
import FadeIn from "@components/Transitions/fadeIn";
import Loading from "@components/Transitions/loader";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "util/fetch";

import * as Styles from "./styles";

const ReportsPage = ({ isMainPage = false }) => {
  const router = useRouter();
  const { data: sfnewsReports } = useSWR(
    `https://api.spaceflightnewsapi.net/v3/reports`,
    fetcher
  );
  return (
    <Styles.Container>
      <Styles.Header>Reports</Styles.Header>

      <Styles.CardContainer>
        {sfnewsReports ? (
          <FadeIn className="fade">
            {isMainPage ? (
              <>
                {sfnewsReports.slice(0, 3).map((news: any) => (
                  <Card
                    key={news.id}
                    data={news}
                    onClick={() => router.push(`/reports/${news.id}`)}
                  />
                ))}
                <SeeMoreBtn page="reports" />
              </>
            ) : (
              sfnewsReports.map((news: any) => (
                <Card
                  key={news.id}
                  data={news}
                  onClick={() => router.push(`/reports/${news.id}`)}
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

export default ReportsPage;
