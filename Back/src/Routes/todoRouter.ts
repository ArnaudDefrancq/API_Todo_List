import express from "express";
import { TodoController } from "../Controllers/TodoController";
const todoRouter = express.Router();

todoRouter.post('/', TodoController.createTodo);
todoRouter.get('/', TodoController.getAllTodo);
todoRouter.get('/:id', TodoController.getOneTodo);
todoRouter.put('/:id/update', TodoController.updateTodo);
todoRouter.delete('/:id', TodoController.deleteTodo);

export default todoRouter;