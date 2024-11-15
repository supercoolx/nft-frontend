export const shortAddress = (address: string) => {
  if (!address) return '';
  return address.slice(0, 6) + '...' + address.slice(-4);
};

export const isValidAddress = (address: string) => {
  const isAddress = address.startsWith('0x') && address.length === 42;
  const isEnsName = /^[a-z0-9-]+(\.[a-z0-9-]+)*\.eth$/.test(address);
  return isAddress || isEnsName;
}