import { GetQueryInterface } from 'interfaces';

export interface SecuritySettingsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface SecuritySettingsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
