import React, { useState } from 'react';
import { Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';
import { Container, Form } from './styles';
import logo from '../../assets/images/logo.svg';
import { Loading } from '../../componets/Loading';
import { setToken } from '../../services/storage';

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    try {
      setLoading(true);
      const response = await api.post('sessions', data);
      setToken(response.data.token);
      setLoading(false);
      history.push('/alunos');
    } catch (error) {
      setLoading(false);
      toast.error('error ao logar');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <img src={logo} alt="gym manager" />

        <label htmlFor="email">SEU EMAIL</label>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="exemplo@email.com"
        />

        <label htmlFor="password">SEU EMAIL</label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="*********"
        />

        <button type="submit" disabled={loading}>
          {loading ? <Loading /> : 'Entrar no sistema'}
        </button>
      </Form>
    </Container>
  );
}
