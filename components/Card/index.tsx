/* eslint-disable @next/next/no-img-element */
import { ST } from "next/dist/next-server/lib/utils";
import * as Styles from "./styles";

const Card = ({ data }: any) => {
  return (
    <Styles.Container>
      <div>
        <Styles.Title>{data.title}</Styles.Title>
        <Styles.NewsSite>{data.newsSite}</Styles.NewsSite>
      </div>

      <Styles.Image src={data.imageUrl} alt="Sfnews" />
    </Styles.Container>
  );
};

export default Card;
