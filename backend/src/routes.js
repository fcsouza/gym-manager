// Controllers
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import RegistrationController from './app/controllers/RegistrationController';
import HelpOrdersController from './app/controllers/HelpOrdersController';
import HelpOrdersAnswerController from './app/controllers/HelpOrdersAnswerController';
import CheckinController from './app/controllers/CheckinController';

import auth from './app/middlewares/auth';

const express = require('express');

const routes = new express.Router();

routes.post('/sessions', SessionController.store);

routes.post('/students/:id/help_orders', HelpOrdersController.store);
routes.get('/students/:id/help_orders', HelpOrdersController.index);


routes.post('/students/:student_id/checkins', CheckinController.store);
routes.get('/students/:student_id/checkins', CheckinController.index);

export default routes;
