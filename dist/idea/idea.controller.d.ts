import { IdeaDTO } from './idea.dto';
import { IdeaService } from './idea/idea.service';
export declare class IdeaController {
    private ideaService;
    constructor(ideaService: IdeaService);
    showAllIdeas(): void;
    createIdea(data: IdeaDTO): void;
    readIdea(id: string): void;
    updateIdea(id: string, data: Partial<IdeaDTO>): Promise<import("./idea.entity").IdeaEntity>;
    destroyIdea(id: string): Promise<{
        deleted: boolean;
    }>;
}
