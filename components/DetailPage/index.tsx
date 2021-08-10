/* eslint-disable @next/next/no-img-element */
import React from "react";
import useSWR from "swr";
import fetcher from "util/fetch";
import Link from "next/link";
import dayjs from "dayjs";

import * as Styles from "./styles";
import Loading from "@components/Transitions/loader";

const DetailPage = ({ page, id }: Props) => {
  const { data: detailPageData } = useSWR(
    page && id ? `https://api.spaceflightnewsapi.net/v3/${page}/${id}` : null,
    fetcher
  );

  return (
    <Styles.Container>
      {detailPageData ? (
        <>
          <Styles.Image src={detailPageData.imageUrl} alt="Detail Page Img" />
          <Styles.Title>{detailPageData.title}</Styles.Title>
          <div>{detailPageData.newsSite}</div>
          <p>{dayjs(detailPageData.publishedAt).format("MMM D, YYYY")}</p>
          <Link href={detailPageData.url}>
            <a>{detailPageData.url}</a>
          </Link>
          <Styles.SubHeader>Summary</Styles.SubHeader>
          <div>{detailPageData.summary}</div>
        </>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <Loading />
        </div>
      )}
    </Styles.Container>
  );
};

type Props = {
  page: string | string[] | undefined;
  id: string | string[] | undefined;
};

export default DetailPage;
