import Redis from 'ioredis';

import { EnvKeys } from './types/envKeys.enum';

export default new Redis(process.env[EnvKeys.REDIS_URL]!);
