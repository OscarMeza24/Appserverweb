import { Request, Response } from "express";
import { CreateTodoUseCase } from "../../application/use-cases/todo/create/create-todo.use-case";
import { GetTodoUseCase } from "../../application/use-cases/todo/get/get-todo.use-case";
import { UpdateTodoUseCase } from "../../application/use-cases/todo/update/update-todo.use-case";
import { DeleteTodoUseCase } from "../../application/use-cases/todo/delete/delete-todo.use-case";
import { TodoLocalDataSource } from "../datasources/local/todo.local.datasource";
import { TodoRepositoryImpl } from "../repositories/todo.repository";

export class TodoController {
  private createTodoUseCase: CreateTodoUseCase;
  private getTodoUseCase: GetTodoUseCase;
  private updateTodoUseCase: UpdateTodoUseCase;
  private deleteTodoUseCase: DeleteTodoUseCase;

  constructor() {
    const todoDataSource = new TodoLocalDataSource();
    const todoRepository = new TodoRepositoryImpl(todoDataSource);
    this.createTodoUseCase = new CreateTodoUseCase(todoRepository);
    this.getTodoUseCase = new GetTodoUseCase(todoRepository);
    this.updateTodoUseCase = new UpdateTodoUseCase(todoRepository);
    this.deleteTodoUseCase = new DeleteTodoUseCase(todoRepository);
  }

  public async create(req: Request, res: Response): Promise<void> {
    const todoDto = req.body;
    const todo = await this.createTodoUseCase.execute(todoDto);
    res.status(201).json(todo);
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    const todos = await this.getTodoUseCase.execute();
    res.status(200).json(todos);
  }

  public async getById(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const todo = await this.getTodoUseCase.execute(id);
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const todoDto = req.body;
    const updatedTodo = await this.updateTodoUseCase.execute(id, todoDto);
    if (updatedTodo) {
      res.status(200).json(updatedTodo);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    await this.deleteTodoUseCase.execute(id);
    res.status(204).send();
  }
}
