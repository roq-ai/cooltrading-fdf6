import { GetQueryInterface } from 'interfaces';

export interface WalletTransactionsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface WalletTransactionsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
