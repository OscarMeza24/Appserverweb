"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../config/data-source");
const Alerta_1 = require("../entities/Alerta");
const RecomendacionIA_1 = require("../entities/RecomendacionIA");
async function runSeeds() {
    await data_source_1.AppDataSource.initialize();
    const alertaRepo = data_source_1.AppDataSource.getRepository(Alerta_1.Alerta);
    const recomendacionRepo = data_source_1.AppDataSource.getRepository(RecomendacionIA_1.RecomendacionIA);
    // Crear alertas
    const alerta1 = await alertaRepo.save({
        mensaje: "Error en el servidor DB",
        nivel: "alta",
        origen: "Sistema de base de datos",
    });
    // Crear recomendaciones asociadas
    await recomendacionRepo.save({
        mensaje: "Verificar conexión a la base de datos",
        alerta: alerta1,
    });
    console.log("✅ Seeds ejecutados correctamente");
    process.exit(0);
}
runSeeds().catch(console.error);
