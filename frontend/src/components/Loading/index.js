import React from 'react';
import loading from '../../assets/images/loading.svg';

import { Container } from './styles';

export function Loading() {
  return (
    <div>
      <img src={loading} alt="" />
    </div>
  );
}

export function LoadingTable() {
  return (
    <Container>
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
    </Container>
  );
}
