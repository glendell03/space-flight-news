import tw, { styled } from "twin.macro";

export const Container = tw.div`
    container
    my-20
    md:my-0
    mx-auto
    h-screen
    px-10
    flex
    flex-col
    justify-center
`;

export const Image = tw.img`
    h-full
    md:h-96
    lg:h-1/2
    w-full
    rounded-lg
    object-cover
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
