import { ConfigService } from '@nestjs/config';

export const DatabaseFactory = (config: ConfigService) => {
  return {
    uri: config.get('DATABASE'),
  };
};
