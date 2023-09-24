import axios from 'axios';
import queryString from 'query-string';
import { MarketTrendsInterface, MarketTrendsGetQueryInterface } from 'interfaces/market-trends';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMarketTrends = async (
  query?: MarketTrendsGetQueryInterface,
): Promise<PaginatedInterface<MarketTrendsInterface>> => {
  const response = await axios.get('/api/market-trends', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMarketTrends = async (marketTrends: MarketTrendsInterface) => {
  const response = await axios.post('/api/market-trends', marketTrends);
  return response.data;
};

export const updateMarketTrendsById = async (id: string, marketTrends: MarketTrendsInterface) => {
  const response = await axios.put(`/api/market-trends/${id}`, marketTrends);
  return response.data;
};

export const getMarketTrendsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/market-trends/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMarketTrendsById = async (id: string) => {
  const response = await axios.delete(`/api/market-trends/${id}`);
  return response.data;
};
