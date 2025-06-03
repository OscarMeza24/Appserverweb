import { TodoRepository } from "../../../../domain/interfaces/repositories/todo.repository.interface";
import { CreateTodoDTO } from "./create-todo.dto";
import { Todo } from "../../../../domain/entities/todo.entity";

export class CreateTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(createTodoDto: CreateTodoDTO): Promise<Todo> {
    const { title, description, completed = false } = createTodoDto;

    // Puedes agregar lógica de validación aquí si lo necesitas

    const newTodo: Todo = {
      id: "", // El id se debe generar en el repositorio o datasource
      title,
      description,
      completed,
    };

    return await this.todoRepository.save(newTodo);
  }
}
