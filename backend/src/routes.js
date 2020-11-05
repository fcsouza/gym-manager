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

routes.use(auth);

routes.post('/students', StudentController.store);
routes.get('/students', StudentController.index);
routes.get('/students/:id', StudentController.show);
routes.put('/students/:id', StudentController.update);
routes.delete('/students/:id', StudentController.delete);

routes.post('/plans', PlanController.store);
routes.get('/plans', PlanController.index);
routes.get('/plans/:id', PlanController.show);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

routes.post('/registrations', RegistrationController.store);
routes.get('/registrations', RegistrationController.index);
routes.get('/registrations/:plan_id', RegistrationController.show);
routes.put('/registrations/:plan_id', RegistrationController.update);
routes.delete('/registrations/:plan_id', RegistrationController.delete);

routes.get('/help_orders', HelpOrdersAnswerController.index);
routes.post('/help_orders/:answer_id/answer', HelpOrdersAnswerController.store);

export default routes;
