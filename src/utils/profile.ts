// import { getPublicClient, createConfig, http } from '@wagmi/core'
// import { mainnet, sepolia, holesky, localhost } from 'wagmi/chains';
// import { CustomTransport, fallback, Transport } from 'viem';

// import { useEipResolver } from './useEipResolver';

// const transportDefinitions: CustomTransport | Transport[] = [];
// transportDefinitions.push(http());

// const transports = fallback(transportDefinitions);

// const config = createConfig({
//   chains: [mainnet, sepolia, holesky, localhost],
//   batch: {
//     multicall: true,
//   },
//   ssr: true,
//   transports: {
//     [mainnet.id]: http(), // TODO: replace this with custom transports on mainnet deployment
//     [sepolia.id]: transports,
//     [holesky.id]: transports,
//     [localhost.id]: transports,
//   },
// });


// export const fetchUserProfile = async (addr: string) => {
//   const client = getPublicClient(config, { chainId: 1 });

//   let address: `0x${string}` | undefined;
//   let ensName: string | null;

//   if (addr.startsWith('0x') && addr.length === 42) {
//     address = addr as `0x${string}`;
//     ensName = await client.getEnsName({ address });
//   } else {
//     ensName = addr;
//     try {
//       address = await client.getEnsAddress({ name: ensName }) as `0x${string}`;
//       if (!address) {
//         throw new Error(`ENS name ${ensName} did not resolve to an address`);
//       }
//     } catch (error) {
//       console.error(`Error resolving ENS name ${ensName}:`, error);
//       return;
//     }
//   }

//   const { resolveEipUrl } = useEipResolver();

//   let ens, avatar, header, location, description, url, email, twitter, discord, telegram, reddit, linkedin, github;

//   try {
//     if (!ensName) {
//       ensName = await client.getEnsName({ address });
//     }
//     ens = ensName;

//     if (ens) {
//       [avatar, header, location, description, url, email, twitter, discord, telegram, reddit, linkedin, github] = await Promise.all([
//         client.getEnsAvatar({ name: ens }),
//         client.getEnsText({ name: ens, key: 'header' }),
//         client.getEnsText({ name: ens, key: 'location' }),
//         client.getEnsText({ name: ens, key: 'description' }),
//         client.getEnsText({ name: ens, key: 'url' }),
//         client.getEnsText({ name: ens, key: 'email' }),
//         client.getEnsText({ name: ens, key: 'com.twitter' }),
//         client.getEnsText({ name: ens, key: 'com.discord' }),
//         client.getEnsText({ name: ens, key: 'org.telegram' }),
//         client.getEnsText({ name: ens, key: 'com.reddit' }),
//         client.getEnsText({ name: ens, key: 'com.linkedin' }),
//         client.getEnsText({ name: ens, key: 'com.github' }),
//       ]);
//       console.log("Fetched ENS data:", { avatar, header, description });
      
//       if (avatar && avatar.startsWith('eip')) {
//         avatar = await resolveEipUrl(avatar);
//       }
//       if (header && header.startsWith('eip')) {
//         header = await resolveEipUrl(header);
//       }
//     }
//   } catch (error) {
//     console.error(`Error fetching ENS data for address ${address}:`, error);
//   }
// }