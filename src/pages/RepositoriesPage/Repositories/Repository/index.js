import React from 'react';
import { Container, Name, Desc, Footer, Link, Lang } from './styles';

function Repository() {
  return (
    <Container color="#f37272">
      <Name>Repository Name</Name>
      <Desc>Repository Description</Desc>
      <Footer color="#f37272">
        <Lang>Repository Lang</Lang>
        <Link
          href="https://github.com/GromRibeiro/apigit-react"
          target="_blank"
        >
          Ver Mais
        </Link>
      </Footer>
    </Container>
  );
}

export default Repository;
