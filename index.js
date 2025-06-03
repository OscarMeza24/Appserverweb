"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const data_source_1 = require("./src/config/data-source"); // Ruta completa desde raíz
const Alerta_1 = require("./src/entities/Alerta");
async function main() {
    try {
        await data_source_1.AppDataSource.initialize();
        console.log("✅ Conexión exitosa a PostgreSQL!");
        const alertaRepo = data_source_1.AppDataSource.getRepository(Alerta_1.Alerta);
        const alertas = await alertaRepo.find();
        console.log("📝 Alertas encontradas:", alertas);
    }
    catch (error) {
        console.error("❌ Error:", error);
    }
}
main();
