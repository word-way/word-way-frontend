export const getConfig = (name: string): string => {
  const config = process.env[name];
  if (config == null) {
    throw new Error(`${name} shoule be not null. Configure at .env files.`);
  }
  return config;
};

export const getNullableConfig = (name: string): string | undefined => {
  return process.env[name];
};
