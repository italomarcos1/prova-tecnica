import React from 'react';

import { Container, Content, ContentText, Logo } from './styles';
import logo from '../../assets/logo.png';

export default function After() {
  return (
    <Container>
      <Content>
        <Logo source={logo} />
        <ContentText>Obrigado por preencher o formulário.</ContentText>
      </Content>
    </Container>
  );
}
