import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loading, Container, Sidebar, Main } from './styles';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';
import { getUser, getLangsFrom, getRepos } from '../../services/api';

function RepositoriesPage() {
  const { login } = useParams();
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [langs, setLanguage] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);
      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data);
      setLanguage(getLangsFrom(repositoriesResponse.data));
      setLoading(false);
    };
    loadData();
  }, []);
  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }
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
