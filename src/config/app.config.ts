interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Administrator'],
  tenantName: 'Exchange',
  applicationName: 'CoolTrading',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage wallet transactions',
    'Manage security settings',
    'Manage user preferences',
    'Manage market trends',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/ca1d3923-4d48-45e8-b128-afdadd6ac5a1',
};
