import React, { useState } from 'react';
import { Container, Sidebar, Main } from './styles';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';
import { getLangsFrom } from '../../services/api';

function RepositoriesPage() {
  const [currentLanguage, setCurrentLanguage] = useState();

  const user = {
    login: 'GromRibeiro',
    name: 'Gabriel Ribeiro',
    avatar_url: 'https://avatars.githubusercontent.com/u/89033176?v=4',
    followers: 1,
    following: 1,
    company: 'Edutec',
    blog: 'https://github.com/GromRibeiro',
    location: 'Belo Horizonte - Brasil',
  };

  const repositories = [
    {
      id: '1',
      name: 'Repo 1',
      description: 'Descrição',
      html_url: 'http://github.com/GromRibeiro',
      language: 'Javascript',
    },
    {
      id: '2',
      name: 'Repo 2',
      description: 'Descrição',
      html_url: 'http://github.com/GromRibeiro',
      language: 'Javascript',
    },
    {
      id: '3',
      name: 'Repo 3',
      description: 'Descrição',
      html_url: 'http://github.com/GromRibeiro',
      language: 'PHP',
    },
    {
      id: '4',
      name: 'Repo 4',
      description: 'Descrição',
      html_url: 'http://github.com/GromRibeiro',
      language: 'TypeScript',
    },
    {
      id: '5',
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'http://github.com/GromRibeiro',
      language: 'Java',
    },
    {
      id: '6',
      name: 'Repo 6',
      description: 'Descrição',
      html_url: 'http://github.com/GromRibeiro',
      language: 'Java',
    },
  ];
  const langs = getLangsFrom(repositories);
  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };
  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          langs={langs}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
