import { AlertaRepository } from "../../../domain/interfaces/repositories/alerta.repository.interface";
import { Alerta } from "../../../domain/entities/alerta.entity";

export class GetAlertasUseCase {
  constructor(private readonly alertaRepository: AlertaRepository) {}

  async execute(): Promise<Alerta[]> {
    return this.alertaRepository.findAll();
  }
}
