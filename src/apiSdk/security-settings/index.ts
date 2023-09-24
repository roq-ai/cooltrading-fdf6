import axios from 'axios';
import queryString from 'query-string';
import { SecuritySettingsInterface, SecuritySettingsGetQueryInterface } from 'interfaces/security-settings';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSecuritySettings = async (
  query?: SecuritySettingsGetQueryInterface,
): Promise<PaginatedInterface<SecuritySettingsInterface>> => {
  const response = await axios.get('/api/security-settings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSecuritySettings = async (securitySettings: SecuritySettingsInterface) => {
  const response = await axios.post('/api/security-settings', securitySettings);
  return response.data;
};

export const updateSecuritySettingsById = async (id: string, securitySettings: SecuritySettingsInterface) => {
  const response = await axios.put(`/api/security-settings/${id}`, securitySettings);
  return response.data;
};

export const getSecuritySettingsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/security-settings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSecuritySettingsById = async (id: string) => {
  const response = await axios.delete(`/api/security-settings/${id}`);
  return response.data;
};
