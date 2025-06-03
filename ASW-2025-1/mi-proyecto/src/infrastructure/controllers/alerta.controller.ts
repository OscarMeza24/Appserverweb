import { Router, Request, Response } from "express";
import { CreateAlertaUseCase } from "../../application/use-cases/alerta/create-alerta.use-case";
import { GetAlertasUseCase } from "../../application/use-cases/alerta/get-alertas.use-case";
import { GetAlertaUseCase } from "../../application/use-cases/alerta/get-alerta.use-case";
import { DeleteAlertaUseCase } from "../../application/use-cases/alerta/delete-alerta.use-case";

export function alertaController(
  createAlerta: CreateAlertaUseCase,
  getAlertas: GetAlertasUseCase,
  getAlerta: GetAlertaUseCase,
  deleteAlerta: DeleteAlertaUseCase
) {
  const router = Router();

  router.post("/", async (req: Request, res: Response) => {
    try {
      const alerta = await createAlerta.execute(req.body);
      res.status(201).json(alerta);
    } catch (err) {
      res.status(400).json({ error: (err as Error).message });
    }
  });

  router.get("/", async (_req: Request, res: Response) => {
    const alertas = await getAlertas.execute();
    res.json(alertas);
  });

  router.get("/:id", async (req: Request, res: Response) => {
    const alerta = await getAlerta.execute(req.params.id);
    if (alerta) res.json(alerta);
    else res.status(404).json({ error: "Alerta no encontrada" });
  });

  router.delete("/:id", async (req: Request, res: Response) => {
    await deleteAlerta.execute(req.params.id);
    res.status(204).send();
  });

  return router;
}
