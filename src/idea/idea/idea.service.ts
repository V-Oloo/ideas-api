import { IdeaDTO } from './../idea.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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
      return new Promise(resolve => {
        resolve(this.ideaRepository.find());
        });

    }

    async  create(data: IdeaDTO): Promise<any> {
        return new Promise(resolve => {
            const idea = this.ideaRepository.create(data);
            resolve(this.ideaRepository.save(idea));
        });
      }

   async read(id: string) {
        const idea = await this.ideaRepository.findOne({where: {id}});
        if (!idea) {
            throw new HttpException('idea does not exist!', HttpStatus.NOT_FOUND);
        }
        return idea;
    }

    async update(id: string, data: Partial<IdeaDTO>) {
        let idea = await this.ideaRepository.findOne({where: {id}});
        if (!idea) {
            throw new HttpException('idea does not exist!', HttpStatus.NOT_FOUND);
        }
        await this.ideaRepository.update({id}, data);
        idea = await this.ideaRepository.findOne({where: {id}});
        return idea;
    }

    async destroy(id: string) {
        const idea = await this.ideaRepository.findOne({where: {id}});
        if (!idea) {
            throw new HttpException('idea does not exist!', HttpStatus.NOT_FOUND);
        }
        await this.ideaRepository.delete([id]);
        return idea;
    }
}
