import { AlertaRepository } from "../../../domain/interfaces/repositories/alerta.repository.interface";
import { Alerta } from "../../../domain/entities/alerta.entity";

export class CreateAlertaUseCase {
  constructor(private readonly alertaRepository: AlertaRepository) {}

  async execute(alerta: Alerta): Promise<Alerta> {
    return this.alertaRepository.save(alerta);
  }
}
