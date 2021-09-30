import { IAccount } from '../entities';

export interface IAccountWSUpdateDto extends IAccount {
  id?: string;
}
