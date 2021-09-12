import React from "react";

import {
  Container,
  Header,
  Title,
  Footer,
  LastEditing,
  NameCompany,
} from "./styles";

interface IProps {
  title: string;
  name: string;
  lastConsults: string;
}

export function HighlightCard({
  title,
  name,
  lastConsults,
}: IProps) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
        <NameCompany>{name}</NameCompany>
      <Footer>
        <LastEditing>{lastConsults}</LastEditing>
      </Footer>
    </Container>
  );
}
