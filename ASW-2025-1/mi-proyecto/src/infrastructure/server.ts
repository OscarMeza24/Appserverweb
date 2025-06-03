import express from "express";
import { alertaController } from "./controllers/alerta.controller";
import { CreateAlertaUseCase } from "../application/use-cases/alerta/create-alerta.use-case";
import { GetAlertasUseCase } from "../application/use-cases/alerta/get-alertas.use-case";
import { GetAlertaUseCase } from "../application/use-cases/alerta/get-alerta.use-case";
import { DeleteAlertaUseCase } from "../application/use-cases/alerta/delete-alerta.use-case";
import { AlertaRepositoryImpl } from "./repositories/alerta.repository";
import { AlertaTypeOrmDataSource } from "./datasources/typeorm/alerta.typeorm.datasource";
import { createConnection } from "typeorm";

const app = express();
app.use(express.json());

async function main() {
  try {
    const connection = await createConnection();
    const alertaDataSource = new AlertaTypeOrmDataSource(connection);
    const alertaRepository = new AlertaRepositoryImpl(alertaDataSource);

    const createAlertaUseCase = new CreateAlertaUseCase(alertaRepository);
    const getAlertasUseCase = new GetAlertasUseCase(alertaRepository);
    const getAlertaUseCase = new GetAlertaUseCase(alertaRepository);
    const deleteAlertaUseCase = new DeleteAlertaUseCase(alertaRepository);

    app.use(
      "/alertas",
      alertaController(
        createAlertaUseCase,
        getAlertasUseCase,
        getAlertaUseCase,
        deleteAlertaUseCase
      )
    );

    const port = process.env.SERVER_PORT || 3000;
    app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
  }
}

main();
