import { TodoRepository } from "../../../../domain/interfaces/repositories/todo.repository.interface";
import { Todo } from "../../../../domain/entities/todo.entity";
import { CreateTodoDTO } from "../create/create-todo.dto";

export class UpdateTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  public async execute(
    id: string,
    todoDto: CreateTodoDTO
  ): Promise<Todo | null> {
    const todo = await this.todoRepository.findById(id);
    if (!todo) return null;
    Object.assign(todo, todoDto);
    return this.todoRepository.save(todo);
  }
}
