/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateAsignacioneDto } from "./dto/create-asignacione.dto";
import { UpdateAsignacioneDto } from "./dto/update-asignacione.dto";

const asignaciones = [
  {
    id: 1,
    nombre_asignacion: "Asignacion 1",
    rol: "Rol 1",
    fecha_asignacion: "2023-10-01",
    estado: "Activo",
  },
  {
    id: 2,
    nombre_asignacion: "Asignacion 2",
    rol: "Rol 2",
    fecha_asignacion: "2023-10-02",
    estado: "Inactivo",
  },
];

@Injectable()
export class AsignacionesService {
  create(createAsignacioneDto: CreateAsignacioneDto) {
    asignaciones.push(createAsignacioneDto);
    return createAsignacioneDto;
  }

  findAll() {
    return asignaciones;
  }

  findOne(id: number) {
    return `This action returns a #${id} asignacione`;
  }

  update(id: number, updateAsignacioneDto: UpdateAsignacioneDto) {
    return updateAsignacioneDto;
  }

  remove(id: number) {
    return `This action removes a #${id} asignacione`;
  }
}
