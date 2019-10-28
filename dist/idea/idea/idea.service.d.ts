import { IdeaDTO } from './../idea.dto';
import { Repository } from 'typeorm';
import { IdeaEntity } from '../idea.entity';
export declare class IdeaService {
    private ideaRepository;
    constructor(ideaRepository: Repository<IdeaEntity>);
    showAll(): Promise<IdeaEntity[]>;
    create(data: IdeaDTO): Promise<IdeaEntity>;
    read(id: string): Promise<{
        deleted: boolean;
    }>;
    update(id: string, data: Partial<IdeaDTO>): Promise<IdeaEntity>;
    destroy(id: string): Promise<{
        deleted: boolean;
    }>;
}
