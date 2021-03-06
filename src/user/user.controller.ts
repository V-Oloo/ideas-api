import { UserEntity } from './user.entity';
import { UserDTO, UserRO } from './user.dto';
import { Controller, Post, Get, Body, UsePipes, UseGuards } from '@nestjs/common';
import { UserService } from './user/user.service';
import { ValidationPipe } from '../shared/validation.pipe';
import { AuthGuard } from '../shared/auth.guard';
import { User } from './user.decorator';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}

    @Get('/api/users')
    @UseGuards(new AuthGuard())
    showAllUsers(@User('username') user: UserEntity) {
       console.log(user);
       return this.userService.showAll();
    }

    @Post('login')
    @UsePipes(new ValidationPipe())
    login(@Body() data: UserDTO) {
      return this.userService.login(data);
    }

    @Post('register')
    @UsePipes(new ValidationPipe())
    register(@Body() data: UserDTO) {
      return this.userService.register(data);
    }
}
