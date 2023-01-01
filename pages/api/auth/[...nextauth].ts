import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';

import { EnvKeys } from '../../../utils/envKeys.enum';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env[EnvKeys.FACEBOOK_CLIENT_ID]!,
      clientSecret: process.env[EnvKeys.FACEBOOK_CLIENT_SECRET]!,
    }),
    // ...add more providers here
  ],
  secret: process.env[EnvKeys.NEXTAUTH_SECRET!],
  pages: {
    signIn: '/auth/signin',
  },
};
export default NextAuth(authOptions);