import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { JsonStorageService } from '../common/services/json-storage.service';

@Injectable()
export class UsuariosService {
  private storage: JsonStorageService<Usuario>;

  constructor() {
    this.storage = new JsonStorageService<Usuario>('usuarios');
  }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.storage.create(createUsuarioDto as any);
  }

  async findAll(): Promise<Usuario[]> {
    return this.storage.findAll();
  }

  async findOne(id: string | number): Promise<Usuario> {
    const usuario = await this.storage.findOne(id);
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return usuario;
  }

  async update(id: string | number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    await this.findOne(id);
    
    const updated = await this.storage.update(id, updateUsuarioDto);
    if (!updated) {
      throw new NotFoundException(`No se pudo actualizar el usuario con ID ${id}`);
    }
    
    return updated;
  }

  async remove(id: string | number): Promise<void> {
    const result = await this.storage.remove(id);
    if (!result) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
  }

  async findByEmail(email: string): Promise<Usuario | undefined> {
    const usuarios = await this.storage.findAll();
    return usuarios.find(usuario => usuario.correo === email);
  }
}
