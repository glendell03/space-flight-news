import tw, { styled } from "twin.macro";

export const Container = tw.div`
    container
    mx-auto
    h-screen
    px-10
    flex
    flex-col
    justify-center
`;

export const Image = styled.img`
  height: 40rem;
  background-size: cover;
  ${() => tw`
        w-full
        rounded-lg
        object-cover
    `};
`;

export const Title = tw.h1`
    text-4xl
    mt-10
    mb-4
`;

export const SubHeader = tw.h2`
    text-3xl
    my-5
`;
