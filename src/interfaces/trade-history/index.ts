import { GetQueryInterface } from 'interfaces';

export interface TradeHistoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface TradeHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
