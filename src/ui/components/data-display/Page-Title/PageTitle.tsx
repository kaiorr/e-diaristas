import React from "react";
import {
  PageTitleStyled,
  PageTitleContainer,
  PageSubTitleStyled,
} from "./PageTitle.style";

interface PageTitleProps {
  title: string;
  subtitle: string;
}

export const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <div>
      <PageTitleContainer>
        <PageTitleStyled>{props.title}</PageTitleStyled>
        <PageSubTitleStyled>{props.subtitle}</PageSubTitleStyled>
      </PageTitleContainer>
    </div>
  );
};
