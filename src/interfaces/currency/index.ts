import { MarketInterface } from 'interfaces/market';
import { GetQueryInterface } from 'interfaces';

export interface CurrencyInterface {
  id?: string;
  name: string;
  symbol: string;
  created_at?: any;
  updated_at?: any;
  market?: MarketInterface[];

  _count?: {
    market?: number;
  };
}

export interface CurrencyGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  symbol?: string;
}
