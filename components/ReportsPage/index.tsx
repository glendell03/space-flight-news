import Card from "@components/Card";
import useSWR from "swr";
import fetcher from "util/fetch";

import * as Styles from "./styles";

const ReportsPage = () => {
  const { data: sfnewsReports } = useSWR(
    `https://api.spaceflightnewsapi.net/v3/reports`,
    fetcher
  );
  return (
    <Styles.Container>
      <Styles.Header>Reports</Styles.Header>
      <Styles.CardContainer>
        {sfnewsReports ? (
          sfnewsReports.map((news: any) => <Card key={news.id} data={news} />)
        ) : (
          <div>Loading...</div>
        )}
      </Styles.CardContainer>
    </Styles.Container>
  );
};

export default ReportsPage;
