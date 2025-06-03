import { TodoRepository } from "../../../../domain/interfaces/repositories/todo.repository.interface";

export class DeleteTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  public async execute(id: string): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
