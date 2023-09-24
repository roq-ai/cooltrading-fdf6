import { ExchangeInterface } from 'interfaces/exchange';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TransactionInterface {
  id?: string;
  amount: number;
  transaction_type: string;
  transaction_date?: any;
  exchange_id: string;
  user_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  exchange?: ExchangeInterface;
  user?: UserInterface;
  _count?: {};
}

export interface TransactionGetQueryInterface extends GetQueryInterface {
  id?: string;
  transaction_type?: string;
  exchange_id?: string;
  user_id?: string;
  status?: string;
}
