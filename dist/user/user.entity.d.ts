import { UserRO } from './user.dto';
export declare class UserEntity {
    id: string;
    created: Date;
    username: string;
    password: string;
    hashPassword(): Promise<void>;
    toResponceObject(showToken?: boolean): UserRO;
    comparePassword(attempt: string): Promise<boolean>;
    private readonly token;
}
