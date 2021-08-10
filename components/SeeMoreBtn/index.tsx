import * as Styles from "./styles";
import { useRouter } from "next/router";

const SeeMoreBtn = ({ page }: Props) => {
  const router = useRouter();
  return (
    <Styles.Container onClick={() => router.push(`/${page}`)}>
      <Styles.Text>See More</Styles.Text>
    </Styles.Container>
  );
};

type Props = {
  page: string;
};

export default SeeMoreBtn;
