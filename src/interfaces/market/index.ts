import { ExchangeInterface } from 'interfaces/exchange';
import { CurrencyInterface } from 'interfaces/currency';
import { GetQueryInterface } from 'interfaces';

export interface MarketInterface {
  id?: string;
  name: string;
  exchange_id: string;
  currency_id: string;
  created_at?: any;
  updated_at?: any;

  exchange?: ExchangeInterface;
  currency?: CurrencyInterface;
  _count?: {};
}

export interface MarketGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  exchange_id?: string;
  currency_id?: string;
}
