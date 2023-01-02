import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';

import { EnvKeys } from '../../../types/envKeys.enum';

export const authOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env[EnvKeys.FACEBOOK_CLIENT_ID]!,
      clientSecret: process.env[EnvKeys.FACEBOOK_CLIENT_SECRET]!,
    }),
  ],
  secret: process.env[EnvKeys.NEXTAUTH_SECRET!],
  pages: {
    signIn: '/auth/signin',
  },
};
export default NextAuth(authOptions);