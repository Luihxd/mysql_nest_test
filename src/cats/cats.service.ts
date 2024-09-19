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
    return await this.catsRepository.save(createCatDto);
  }

  async findAll() {
    return await this.catsRepository.find();
  }

  async findOne(id: number) {
    //return await this.catsRepository.findOne(id);
    //return await this.catsRepository.findOne(FindOneOptions<Cat>);
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  async remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
