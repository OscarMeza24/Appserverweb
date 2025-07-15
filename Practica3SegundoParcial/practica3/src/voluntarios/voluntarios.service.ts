/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateVoluntarioDto } from "./dto/create-voluntario.dto";
import { UpdateVoluntarioDto } from "./dto/update-voluntario.dto";

const voluntarios = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Pérez",
    correo: "juan@gmail.com",
    telefono: "123456789",
    direccion: "Calle Falsa 123",
    fecha_nacimiento: "1990-01-01",
    genero: "Masculino",
    estado: "Activo",
  },
  {
    id: 2,
    nombre: "Ana",
    apellido: "Gómez",
    correo: "ana@gmail.com",
    telefono: "987654321",
    direccion: "Avenida Siempre Viva 456",
    fecha_nacimiento: "1992-02-02",
    genero: "Femenino",
    estado: "Activo",
  },
];

@Injectable()
export class VoluntariosService {
  create(createVoluntarioDto: CreateVoluntarioDto) {
    voluntarios.push(createVoluntarioDto);
    return createVoluntarioDto;
  }

  findAll() {
    return voluntarios;
  }

  findOne(id: number) {
    return `This action returns a #${id} voluntario`;
  }

  update(id: number, updateVoluntarioDto: UpdateVoluntarioDto) {
    return updateVoluntarioDto;
  }

  remove(id: number) {
    return `This action removes a #${id} voluntario`;
  }
}
