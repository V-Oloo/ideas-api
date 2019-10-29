import { UserDTO, UserRO } from './user.dto';
import { UserService } from './user/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    showAllUsers(): Promise<UserRO[]>;
    login(data: UserDTO): Promise<UserRO>;
    register(data: UserDTO): Promise<UserRO>;
}
