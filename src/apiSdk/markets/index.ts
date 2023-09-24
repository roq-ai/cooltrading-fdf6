import axios from 'axios';
import queryString from 'query-string';
import { MarketInterface, MarketGetQueryInterface } from 'interfaces/market';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMarkets = async (query?: MarketGetQueryInterface): Promise<PaginatedInterface<MarketInterface>> => {
  const response = await axios.get('/api/markets', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMarket = async (market: MarketInterface) => {
  const response = await axios.post('/api/markets', market);
  return response.data;
};

export const updateMarketById = async (id: string, market: MarketInterface) => {
  const response = await axios.put(`/api/markets/${id}`, market);
  return response.data;
};

export const getMarketById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/markets/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMarketById = async (id: string) => {
  const response = await axios.delete(`/api/markets/${id}`);
  return response.data;
};
