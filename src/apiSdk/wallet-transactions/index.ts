import axios from 'axios';
import queryString from 'query-string';
import { WalletTransactionsInterface, WalletTransactionsGetQueryInterface } from 'interfaces/wallet-transactions';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getWalletTransactions = async (
  query?: WalletTransactionsGetQueryInterface,
): Promise<PaginatedInterface<WalletTransactionsInterface>> => {
  const response = await axios.get('/api/wallet-transactions', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createWalletTransactions = async (walletTransactions: WalletTransactionsInterface) => {
  const response = await axios.post('/api/wallet-transactions', walletTransactions);
  return response.data;
};

export const updateWalletTransactionsById = async (id: string, walletTransactions: WalletTransactionsInterface) => {
  const response = await axios.put(`/api/wallet-transactions/${id}`, walletTransactions);
  return response.data;
};

export const getWalletTransactionsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/wallet-transactions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteWalletTransactionsById = async (id: string) => {
  const response = await axios.delete(`/api/wallet-transactions/${id}`);
  return response.data;
};
