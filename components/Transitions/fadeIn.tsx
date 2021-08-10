import React from "react";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const FadeIn = ({ children }: any) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  animation: 3s ${keyframes`${fadeIn}`};
`;

export default FadeIn;
