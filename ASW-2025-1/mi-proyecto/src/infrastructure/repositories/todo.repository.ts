import { TodoRepository } from "../../domain/interfaces/repositories/todo.repository.interface";
import { Todo } from "../../domain/entities/todo.entity";
import { TodoDataSource } from "../../domain/interfaces/datasources/todo.datasource.interface";
import { CreateTodoDTO } from "../../application/use-cases/todo/create/create-todo.dto";

export class TodoRepositoryImpl implements TodoRepository {
  constructor(private readonly dataSource: TodoDataSource) {}

  async findAll(): Promise<Todo[]> {
    return this.dataSource.getAll();
  }

  async findById(id: string): Promise<Todo | null> {
    return this.dataSource.getById(id);
  }

  async save(todo: Todo): Promise<Todo> {
    // Puedes adaptar esto si tu datasource espera un DTO
    return this.dataSource.create(todo as CreateTodoDTO);
  }

  async delete(id: string): Promise<void> {
    await this.dataSource.delete(id);
  }
}
