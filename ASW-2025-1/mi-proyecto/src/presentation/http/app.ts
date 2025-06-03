import express from 'express';
import { TodoController } from '../../infrastructure/controllers/todo.controller';

export const configureApp = () => {
    const app = express();
    app.use(express.json());

    const todoController = new TodoController();

    app.post('/todos', todoController.create.bind(todoController));
    app.get('/todos', todoController.getAll.bind(todoController));
    app.get('/todos/:id', todoController.getById.bind(todoController));
    app.put('/todos/:id', todoController.update.bind(todoController));
    app.delete('/todos/:id', todoController.delete.bind(todoController));

    return app;
};