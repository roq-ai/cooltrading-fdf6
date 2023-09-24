import { MarketInterface } from 'interfaces/market';
import { TransactionInterface } from 'interfaces/transaction';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ExchangeInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  market?: MarketInterface[];
  transaction?: TransactionInterface[];
  user?: UserInterface;
  _count?: {
    market?: number;
    transaction?: number;
  };
}

export interface ExchangeGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
