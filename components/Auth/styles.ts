import tw, { styled } from "twin.macro";

export const Container = tw.div`
   container
   mx-auto
   h-screen
   flex
   justify-center
   items-center
`;

export const Wrapper = tw.div`
    w-full
    h-full
    lg:h-4/5
    lg:w-4/5
    flex
    lg:shadow-lg

`;

export const LeftSide = tw.div`
    flex-1
    p-5
    flex
    flex-col
    relative
`;

export const RightSide = styled.div`
  ${() => tw`
    lg:flex-1
    bg-auth
    object-cover
    `}
  background-size: cover;
`;

export const Header = tw.div`
    text-3xl
    my-10
    absolute
    w-full
    text-center
    lg:text-left
`;

export const Title = tw.h1`
    text-2xl
    text-center
    my-5
`;

export const InputContainer = tw.div`
    flex
    flex-col
    justify-center
    items-center
    gap-5
`;

export const Input = tw.input`
    w-96
    h-10
    border
    p-3
`;

export const Button = tw.button`
    w-96
    p-3
    text-white
    bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
`;

export const Center = tw.div`
    flex-1
    flex
    flex-col
    justify-center
    items-center
`;

export const Error = tw.div`
    w-96
    text-left
    text-red-600
`;

export const SignUpLink = tw.div`
    w-96
    text-left
    my-5
`;

export const Link = tw.a`
    underline
    cursor-pointer
    text-blue-400
`;
