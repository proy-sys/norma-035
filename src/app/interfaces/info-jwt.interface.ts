import { User } from './info-user.interface';

export interface JwtResponseI {
    estado?: number;
    res?: string;
    user?: User;
    msg?: string;
  }