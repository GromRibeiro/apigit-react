import React from 'react';
import { Container, Selector, Cleaner } from './styles';

function Filter() {
  const langs = [
    {
      name: 'Javascript',
      count: 5,
      color: '#f1c40f',
    },
    {
      name: 'PHP',
      count: 4,
      color: '#95a5a6',
    },
    {
      name: 'Css',
      count: 3,
      color: '#3498db',
    },
  ];
  const selectors = langs.map(({ name, count, color }) => (
    <Selector key={name.toLowerCase()} color={color}>
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));
  return (
    <Container>
      {selectors}
      <Cleaner>Limpar</Cleaner>
    </Container>
  );
}

export default Filter;
