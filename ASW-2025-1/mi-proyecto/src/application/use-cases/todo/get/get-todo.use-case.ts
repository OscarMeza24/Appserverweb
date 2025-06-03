import { TodoRepository } from "../../../../domain/interfaces/repositories/todo.repository.interface";
import { Todo } from "../../../../domain/entities/todo.entity";

export class GetTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  public async execute(id?: string): Promise<Todo | Todo[] | null> {
    if (id) {
      return this.todoRepository.findById(id);
    }
    return this.todoRepository.findAll();
  }
}
