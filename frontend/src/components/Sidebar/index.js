import React from 'react';
import { Link } from 'react-router-dom';
import {
  MdPerson,
  MdPortrait,
  MdConfirmationNumber,
  MdAssignment,
} from 'react-icons/md';

import { Container } from './styles';
import logo from '../../assets/images/logo-gym.svg';

export default function Sidebar() {
  const { pathname } = window.location;
  return (
    <Container>
      <Link to="/alunos" className={pathname === '/alunos' ? 'active' : ''}>
        <img src={logo} alt="Gym point" />
      </Link>

      <ul>
        <li>
          <Link to="/alunos" className={pathname === '/alunos' ? 'active' : ''}>
            <MdPerson size={24} color="#CBCED6" />
            Alunos
          </Link>
        </li>
        <li>
          <Link to="/planos" className={pathname === '/planos' ? 'active' : ''}>
            <MdConfirmationNumber size={22} color="#CBCED6" />
            Planos
          </Link>
        </li>
        <li>
          <Link
            to="/matriculas"
            className={pathname === '/matriculas' ? 'active' : ''}
          >
            <MdPortrait size={22} color="#CBCED6" />
            Matriculas
          </Link>
        </li>
        <li>
          <Link
            to="/auxilios"
            className={pathname === '/auxilios' ? 'active' : ''}
          >
            <MdAssignment size={22} color="#CBCED6" />
            Auxílio
          </Link>
        </li>
      </ul>
    </Container>
  );
}
