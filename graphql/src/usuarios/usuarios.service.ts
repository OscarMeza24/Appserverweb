import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  // Array en memoria para simular la base de datos
  private usuarios: Usuario[] = [];
  private currentId = 1;

  create(createUsuarioInput: CreateUsuarioInput): Usuario {
    const now = new Date();
    const nuevoUsuario: Usuario = {
      id: this.currentId++,
      ...createUsuarioInput,
      createdAt: now,
      updatedAt: now,
    };
    this.usuarios.push(nuevoUsuario);
    return nuevoUsuario;
  }

  findAll(): Usuario[] {
    return [...this.usuarios];
  }

  findOne(id: number): Usuario {
    const usuario = this.usuarios.find((u) => u.id === id);
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return { ...usuario };
  }

  update(id: number, updateUsuarioInput: UpdateUsuarioInput): Usuario {
    const index = this.usuarios.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    const usuarioActualizado = {
      ...this.usuarios[index],
      ...updateUsuarioInput,
      updatedAt: new Date(),
    };

    this.usuarios[index] = usuarioActualizado;
    return { ...usuarioActualizado };
  }

  remove(id: number): Usuario {
    const index = this.usuarios.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    const [usuarioEliminado] = this.usuarios.splice(index, 1);
    return usuarioEliminado;
  }
}
