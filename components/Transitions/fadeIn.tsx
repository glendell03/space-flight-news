import React from "react";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const FadeIn = ({ children, ...otherProps }: any) => {
  return <Wrapper {...otherProps}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  animation: 1s ${keyframes`${fadeIn}`};
`;

export default FadeIn;
