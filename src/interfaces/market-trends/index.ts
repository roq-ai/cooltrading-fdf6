import { GetQueryInterface } from 'interfaces';

export interface MarketTrendsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface MarketTrendsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
