import tw from "twin.macro";

export const Container = tw.div`
    container
    mx-auto
    h-screen
    flex
    justify-center
    items-center
`;

export const Wrapper = tw.div`
    w-1/2
`;

export const Title = tw.h1`
    text-2xl
    font-semibold
    text-center
    m-2
`;

export const InputContainer = tw.div`
    flex
    flex-col
`;

export const Input = tw.input`
    border-2
    m-2
    p-2
`;

export const Button = tw.button`
    h-10
    m-2
    bg-blue-500
    text-white
`;
