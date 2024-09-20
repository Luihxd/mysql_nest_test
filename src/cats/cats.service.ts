import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {

  constructor(
    @InjectRepository(Cat) 
    private readonly catsRepository: Repository<Cat>,
  ) {}
  async create(createCatDto: CreateCatDto) {
    const cat = this.catsRepository.create(createCatDto);
    //Parece que funciona si solo usamos el save, pero no lo valida si no crea la instancia
    return await this.catsRepository.save(cat);
  }

  async findAll() {
    return await this.catsRepository.find();
  }

  async findOne(id: number) {
    return await this.catsRepository.findOneBy({ id });
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  async remove(id: number) {
    // SoftDelete, eliminacion lógica automática por TypeORM
    //Agrega una fecha al DeleteDateColumn, y cuando se hace el find, 
    //no enviará ese registro, pero sigue en la base de datos
    // SoftRemove, ocupa instancia del objeto
    return await this.catsRepository.softDelete({ id });
  }
}
