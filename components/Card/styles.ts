import tw from "twin.macro";

export const Container = tw.div`
    h-80
    w-80
    bg-gray-100
    border
    rounded-lg
    shadow-xl
    p-5
    flex
    flex-col
    justify-between
    cursor-pointer
    hover:bg-gray-200
    transition
    duration-300 ease-in-out
`;

export const Image = tw.img`
    h-40
    w-full
    object-cover
    rounded-lg
`;

export const NewsSite = tw.div`
    bg-yellow-400
    py-1
    px-3
    w-max
    rounded-lg
`;

export const Title = tw.h1`
    font-semibold
    mb-2
`;
