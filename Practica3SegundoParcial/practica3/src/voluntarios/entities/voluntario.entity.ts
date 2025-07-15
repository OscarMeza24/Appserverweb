/* eslint-disable prettier/prettier */
export class Voluntario {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  direccion: string;
  fecha_nacimiento: string;
  genero: "Masculino" | "Femenino";
  estado: "Activo" | "Inactivo";
}
