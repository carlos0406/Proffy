import express, { response } from 'express'
import ClassesController from './controllers/classesController';
import ConnectionsController from './controllers/connectionsController';
const routes = express.Router();
const classesControle = new ClassesController;
const connectionController = new ConnectionsController;
routes.post('/classes', classesControle.create)
routes.get('/classes', classesControle.index)

routes.post('/connections', connectionController.create)
routes.get('/connections', connectionController.index)
export default routes