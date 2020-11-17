import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Aluno from '../pages/Aluno';
import SignIn from '../pages/SignIn';
import Matricula from '../pages/Matricula';
import Plano from '../pages/Plano';
import Auxilio from '../pages/Auxilio';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/alunos" component={Aluno} isPrivate />
      <Route path="/matriculas" component={Matricula} isPrivate />
      <Route path="/planos" component={Plano} isPrivate />
      <Route path="/auxilios" component={Auxilio} isPrivate />
    </Switch>
  );
}
