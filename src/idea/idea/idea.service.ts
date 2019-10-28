import { IdeaDTO } from './../idea.dto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IdeaEntity } from '../idea.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class IdeaService {
    constructor(
        @InjectRepository(IdeaEntity)
        private ideaRepository: Repository<IdeaEntity>,
        ) {}

    async showAll(): Promise<IdeaEntity[]>  {
      return await this.ideaRepository.find();

    }

    async create(data: IdeaDTO) {

        const idea = this.ideaRepository.create(data);
        const ress = await this.ideaRepository.save(idea);
        return ress;
    }

    async read(id: string) {
        await this.ideaRepository.findOne({id});
        return {deleted: true};
    }

    async update(id: string, data: Partial<IdeaDTO>) {
        await this.ideaRepository.update({id}, data);
        return await this.ideaRepository.findOne({id});
    }

    async destroy(id: string) {
        await this.ideaRepository.delete([id]);
        return {deleted: true };
    }
}
