import { UserDTO, UserRO } from './../user.dto';
import { UserEntity } from '../user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    showAll(): Promise<UserRO[]>;
    login(data: UserDTO): Promise<UserRO>;
    register(data: UserDTO): Promise<UserRO>;
}
