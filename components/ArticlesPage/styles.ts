import tw, { styled } from "twin.macro";

export const Container = tw.div`
    container
    mx-auto
    mb-14
`;

export const Header = tw.h1`
    text-5xl
    text-center
    tracking-widest
    uppercase
    my-10
`;

export const CardContainer = styled.div`
  .fade {
    ${() => tw`
            flex
            justify-center
            items-center
            flex-wrap
            gap-10
        `}
  }
`;
