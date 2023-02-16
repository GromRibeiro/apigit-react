import React from 'react';
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/89033176?v=4" />
        <Login>devcurso</Login>
        <Name>Bielgrom</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
        </Data>
        <Data>
          <MdWork size={20} /> Edutec
        </Data>
        <Data>
          <MdLocationCity size={20} /> Belo Horizonte - Brazil
        </Data>
        <Data>
          <MdLink size={20} />
          <a href="https://github.com/GromRibeiro">
            https://github.com/GromRibeiro
          </a>
        </Data>
      </Inner>
    </Container>
  );
}

export default Profile;
