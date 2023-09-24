const mapping: Record<string, string> = {
  currencies: 'currency',
  exchanges: 'exchange',
  markets: 'market',
  'market-trends': 'market_trends',
  'security-settings': 'security_settings',
  'trade-histories': 'trade_history',
  transactions: 'transaction',
  users: 'user',
  'user-preferences': 'user_preferences',
  wallets: 'wallet',
  'wallet-transactions': 'wallet_transactions',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
