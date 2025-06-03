import { AlertaRepository } from "../../domain/interfaces/repositories/alerta.repository.interface";
import { Alerta } from "../../domain/entities/alerta.entity";
import { AlertaDataSource } from "../../domain/interfaces/datasources/alerta.datasource.interface";

export class AlertaRepositoryImpl implements AlertaRepository {
  constructor(private readonly dataSource: AlertaDataSource) {}

  findAll(): Promise<Alerta[]> {
    return this.dataSource.getAll();
  }

  findById(id: string): Promise<Alerta | null> {
    return this.dataSource.getById(id);
  }

  save(alerta: Alerta): Promise<Alerta> {
    return this.dataSource.create(alerta);
  }

  delete(id: string): Promise<void> {
    return this.dataSource.delete(id);
  }
}
