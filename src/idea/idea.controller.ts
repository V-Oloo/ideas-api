import { IdeaDTO } from './idea.dto';
import { IdeaService } from './idea/idea.service';
import { Controller, Post, Get, Put, Delete, Body, Param, UsePipes, Logger } from '@nestjs/common';
import { ValidationPipe } from '../shared/validation.pipe';

@Controller('api/ideas')
export class IdeaController {
    private logger = new Logger('IdeaController');
    constructor(private ideaService: IdeaService) {}

    @Get()
    async showAllIdeas() {
       const ideas = await this.ideaService.showAll();
       return ideas;
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async createIdea(@Body() data: IdeaDTO) {
      this.logger.log(JSON.stringify(data));
      const idea = await this.ideaService.create(data);
      return idea;
    }

    @Get(':id')
    async readIdea(@Param('id') id: string) {

        const idea = await this.ideaService.read(id);
        return idea;
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    updateIdea(@Param('id') id: string, @Body() data: Partial<IdeaDTO>) {
        this.logger.log(JSON.stringify(data));
        return this.ideaService.update(id, data);
    }

    @Delete(':id')
    destroyIdea(@Param('id') id: string) {
        return this.ideaService.destroy(id);
    }

}
