/* eslint-disable prettier/prettier */
export class CreateEventoDto {
  id: number;
  nombre_evento: string;
  fecha_evento: string;
  lugar_evento: string;
  estado: "Activo" | "Inactivo";
}
