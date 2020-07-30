import { User } from 'src/app/interfaces/info-user.interface';

export class RoleValidator{

    isAdmin(user: User): boolean{
        return user.role === '1';
    }

    isEmploye(user: User): boolean{
        return user.role === '0';
    }
}