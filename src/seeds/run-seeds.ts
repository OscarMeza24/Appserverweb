import { AppDataSource } from "../config/data-source";
import { Alerta } from "../entities/Alerta";
import { RecomendacionIA } from "../entities/RecomendacionIA";

async function runSeeds() {
  await AppDataSource.initialize();

  const alertaRepo = AppDataSource.getRepository(Alerta);
  const recomendacionRepo = AppDataSource.getRepository(RecomendacionIA);

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
