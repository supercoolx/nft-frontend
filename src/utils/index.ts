export const shortAddress = (address: string) => {
  if (!address) return '';
  return address.slice(0, 6) + '...' + address.slice(-4);
};

export const isValidAddress = (address: string) => {
  const isAddress = address.startsWith('0x') && address.length === 42;
  const isEnsName = /^[a-z0-9-]+(\.[a-z0-9-]+)*\.eth$/.test(address);
  return isAddress || isEnsName;
}

export const toBMK = (value: string | number) => {
  // Ensure the input is a number
  const num = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(num)) {
    throw new Error("Invalid input: value must be a string or number that can be converted to a number.");
  }

  if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + "B"; // Billion
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(2) + "M"; // Million
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(2) + "K"; // Thousand
  } else {
    return num.toString(); // Return as is for smaller numbers
  }
}