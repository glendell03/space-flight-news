/* eslint-disable @next/next/no-img-element */
import * as Styles from "./styles";

const Card = ({ data, onClick }: Props) => {
  return (
    <Styles.Container onClick={onClick}>
      <div>
        <Styles.Title>{data.title}</Styles.Title>
        <Styles.NewsSite>{data.newsSite}</Styles.NewsSite>
      </div>

      <Styles.Image src={data.imageUrl} alt="Sfnews" />
    </Styles.Container>
  );
};

type Props = {
  data: any;
  onClick: () => void;
};

export default Card;
