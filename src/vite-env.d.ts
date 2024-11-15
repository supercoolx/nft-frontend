/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface Links {
  website: {
    link: string;
    handle: string;
    sources: string[];
  };
  github: {
    link: string;
    handle: string;
    sources: string[];
  };
  discord: {
    link: string;
    handle: string;
    sources: string[];
  };
  twitter: {
    link: string;
    handle: string;
    sources: string[];
  };
  telegram: {
    link: string;
    handle: string;
    sources: string[];
  };
}

interface UserProfile {
  address: string;
  identity: string;
  platform: string;
  displayName: string;
  avatar: string;
  description: string | null;
  header: string;
  contenthash: string;
  links: Links;
  social: Record<string, unknown>; // Can be extended as needed
}

type TradeSummary = {
  total_count_of_trades: number;
  total_trade_volume: string; // Assuming it's a string for precise representation
  total_realized_profit_usd: string; // Assuming it's a string for precise representation
  total_realized_profit_percentage: number;
  total_buys: number;
  total_sells: number;
  total_sold_volume_usd: string; // Assuming it's a string for precise representation
  total_bought_volume_usd: string; // Assuming it's a string for precise representation
};