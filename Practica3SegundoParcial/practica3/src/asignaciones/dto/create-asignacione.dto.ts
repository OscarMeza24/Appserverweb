/* eslint-disable prettier/prettier */
export class CreateAsignacioneDto {
  id: number;
  nombre_asignacion: string;
  rol: string;
  fecha_asignacion: string;
  estado: "Activo" | "Inactivo";
}
