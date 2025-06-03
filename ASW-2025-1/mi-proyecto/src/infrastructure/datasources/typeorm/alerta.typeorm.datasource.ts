import { Connection } from "typeorm";
import { Alerta } from "../../../domain/entities/alerta.entity";
import { AlertaDataSource } from "../../../domain/interfaces/datasources/alerta.datasource.interface";

export class AlertaTypeOrmDataSource implements AlertaDataSource {
  constructor(private readonly dataSource: Connection) {}

  async getAll(): Promise<Alerta[]> {
    return this.dataSource.getRepository(Alerta).find();
  }

  async getById(id: string): Promise<Alerta | null> {
    return (
      (await this.dataSource
        .getRepository(Alerta)
        .findOne({ where: { id } })) ?? null
    );
  }

  async create(alerta: Alerta): Promise<Alerta> {
    return this.dataSource.getRepository(Alerta).save(alerta);
  }

  async delete(id: string): Promise<void> {
    await this.dataSource.getRepository(Alerta).delete(id);
  }
}
