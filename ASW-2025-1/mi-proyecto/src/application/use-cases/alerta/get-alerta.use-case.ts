import { AlertaRepository } from "../../../domain/interfaces/repositories/alerta.repository.interface";
import { Alerta } from "../../../domain/entities/alerta.entity";

export class GetAlertaUseCase {
  constructor(private readonly alertaRepository: AlertaRepository) {}

  async execute(id: string): Promise<Alerta | null> {
    return this.alertaRepository.findById(id);
  }
}
