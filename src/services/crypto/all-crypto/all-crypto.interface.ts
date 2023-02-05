export interface ICoin {
  coinrankingUrl: string;
  tier: number;
  id: string;
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  iconUrl: string;
  websiteUrl: string;
  Volume24h: string;
  marketCap: string;
  price: string;
  btcPrice: string;
  change: string;
  rank: number;
  updatedAt: Date;
  createdAt: Date;
}

export interface GetAllCryptoPayload {
  page: number;
  limit: number;
}

export interface GetAllCryptoResponse {
  coins: ICoin[];
}
