import { IdeaDTO } from './idea.dto';
import { IdeaService } from './idea/idea.service';
import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('idea')
export class IdeaController {

    constructor(private ideaService: IdeaService) {}

    @Get()
    showAllIdeas() {
        this.ideaService.showAll();
    }

    @Post()
    createIdea(@Body() data: IdeaDTO) {
        this.ideaService.create(data);
    }

    @Get(':id')
    readIdea(@Param('id') id: string) {
        this.ideaService.read('id');
    }

    @Put(':id')
    updateIdea(@Param('id') id: string, @Body() data: Partial<IdeaDTO>) {
        return this.ideaService.update(id, data);
    }

    @Delete(':id')
    destroyIdea(@Param('id') id: string) {
        return this.ideaService.destroy(id);
    }

}
