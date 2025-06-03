import { TodoDataSource } from "../../../domain/interfaces/datasources/todo.datasource.interface";
import { Todo } from "../../../domain/entities/todo.entity";
import { getRepository } from "typeorm";

export class TodoTypeORMDataSource implements TodoDataSource {
  private todoRepository = getRepository(Todo);

  async getAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async getById(id: string): Promise<Todo | null> {
    const todo = await this.todoRepository.findOne({ where: { id } });
    return todo ?? null;
  }

  async create(todo: Todo): Promise<Todo> {
    return await this.todoRepository.save(todo);
  }

  async delete(id: string): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
