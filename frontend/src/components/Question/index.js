import React from 'react';

import { Container, User } from './styles';
import user from '../../assets/images/user.jpeg';

export default function Question() {
  return (
    <Container>
      <header>
        <User>
          <img src={user} alt="" />

          <span>Fabricio Souza</span>
        </User>

        <time>1d</time>
      </header>

      <p>
        Olá pessoal da academia, gostaria de saber se quando acordar devo
        ingerir batata doce e frango logo de primeira, preparar as marmitas e
        lotar a geladeira? Dou um pico de insulina e jogo o hipercalórico?
      </p>

      <User answer>
        <img src={user} alt="" />

        <span>Fabricio Souza</span>

        <div>
          <p>Olá, Fabricio. Pode sim.</p>
        </div>
      </User>
    </Container>
  );
}
