import { User } from './info-user.interface';

export interface Session{
  token: string;
  user: User;
}