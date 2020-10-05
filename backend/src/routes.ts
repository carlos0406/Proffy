import express, { response } from 'express'
import ClassesController from './controllers/classesController';
import ConnectionsController from './controllers/connectionsController';
import UsersController from './controllers/userController'
const routes = express.Router();
const classesControle = new ClassesController;
const connectionController = new ConnectionsController;
const usersController = new UsersController
routes.post('/classes', classesControle.create)
routes.get('/classes', classesControle.index)

routes.post('/connections', connectionController.create)
routes.get('/connections', connectionController.index)

routes.get('/users', usersController.index);
export default routes