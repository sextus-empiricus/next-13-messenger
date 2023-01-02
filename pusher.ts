import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

import { EnvKeys } from './types/envKeys.enum';

export const serverPusher = new Pusher({
  appId: process.env[EnvKeys.PUSHER_APP_ID]!,
  key: process.env[EnvKeys.PUSHER_KEY]!,
  secret: process.env[EnvKeys.PUSHER_SECRET]!,
  cluster: 'eu',
  useTLS: true,
});

export const clientPusher = new ClientPusher('86e10210b517ca2db29b', {
  cluster: 'eu',
  forceTLS: true,
});
