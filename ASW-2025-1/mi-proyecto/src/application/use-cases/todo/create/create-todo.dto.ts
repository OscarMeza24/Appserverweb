export class CreateTodoDTO {
  title: string;
  description: string;
  completed?: boolean;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}
