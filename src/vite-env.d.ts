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