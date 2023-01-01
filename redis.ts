import Redis from 'ioredis';

import { EnvKeys } from './utils/envKeys.enum';

export default new Redis(process.env[EnvKeys.REDIS_URL]!);
