import { IdeaDTO } from './idea.dto';
import { IdeaService } from './idea/idea.service';
export declare class IdeaController {
    private ideaService;
    private logger;
    constructor(ideaService: IdeaService);
    showAllIdeas(): Promise<import("./idea.entity").IdeaEntity[]>;
    createIdea(data: IdeaDTO): Promise<any>;
    readIdea(id: string): Promise<import("./idea.entity").IdeaEntity>;
    updateIdea(id: string, data: Partial<IdeaDTO>): Promise<import("./idea.entity").IdeaEntity>;
    destroyIdea(id: string): Promise<import("./idea.entity").IdeaEntity>;
}
