import axios from 'axios';
import queryString from 'query-string';
import { ExchangeInterface, ExchangeGetQueryInterface } from 'interfaces/exchange';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getExchanges = async (
  query?: ExchangeGetQueryInterface,
): Promise<PaginatedInterface<ExchangeInterface>> => {
  const response = await axios.get('/api/exchanges', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createExchange = async (exchange: ExchangeInterface) => {
  const response = await axios.post('/api/exchanges', exchange);
  return response.data;
};

export const updateExchangeById = async (id: string, exchange: ExchangeInterface) => {
  const response = await axios.put(`/api/exchanges/${id}`, exchange);
  return response.data;
};

export const getExchangeById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/exchanges/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteExchangeById = async (id: string) => {
  const response = await axios.delete(`/api/exchanges/${id}`);
  return response.data;
};
