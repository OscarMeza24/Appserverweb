import { AlertaRepository } from "../../../domain/interfaces/repositories/alerta.repository.interface";

export class DeleteAlertaUseCase {
  constructor(private readonly alertaRepository: AlertaRepository) {}

  async execute(id: string): Promise<void> {
    await this.alertaRepository.delete(id);
  }
}
