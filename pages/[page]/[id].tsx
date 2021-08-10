import DetailPage from "@components/DetailPage";
import { useRouter } from "next/router";
import React from "react";

const PageId = () => {
  const router = useRouter();
  const { page, id } = router.query;

  return (
    <div>
      <DetailPage page={page} id={id} />
    </div>
  );
};

export default PageId;
