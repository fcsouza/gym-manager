import React from 'react';
import { MdSearch, MdNotificationsNone } from 'react-icons/md';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <div>
          <label htmlFor="search">
            <MdSearch color="#f7f9fc" size={22} />
          </label>
          <input
            name="search"
            id="search"
            type="text"
            placeholder="Pesquise algo"
          />
        </div>

        <aside>
          <MdNotificationsNone color="#f7f9fc" size={22} />
          <strong>Fabricio Souza</strong>
          <img src="https://api.adorable.io/avatars/40/mud.png" alt="user" />
        </aside>
      </Content>
    </Container>
  );
}
