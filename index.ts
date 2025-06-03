import "reflect-metadata";
import { AppDataSource } from "./src/config/data-source"; // Ruta completa desde raíz
import { Alerta } from "./src/entities/Alerta";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("✅ Conexión exitosa a PostgreSQL!");

    const alertaRepo = AppDataSource.getRepository(Alerta);
    const alertas = await alertaRepo.find();
    console.log("📝 Alertas encontradas:", alertas);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

main();
