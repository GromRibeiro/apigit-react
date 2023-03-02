import React from 'react';
import PropTypes from 'prop-types';
import { Container, Name, Desc, Footer, Link, Lang } from './styles';
import { langColors } from '../../../../services/config';

function Repository({ repository }) {
  const color =
    langColors[repository.language && repository.language.toLowerCase()];
  return (
    <Container color={color}>
      <Name>{repository.name}</Name>
      <Desc>{repository.description}</Desc>
      <Footer color="#f37272">
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target="_blank">
          Ver Mais
        </Link>
      </Footer>
    </Container>
  );
}
Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
  }).isRequired,
};
export default Repository;
