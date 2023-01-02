'use client';

import React from 'react';

import { signIn } from 'next-auth/react';
import { getProviders } from 'next-auth/react';

import { EnvKeys } from '../../../types/envKeys.enum';

interface Props {
  providers: Awaited<ReturnType<typeof getProviders>>;
}

const SigninComponent = ({ providers }: Props) => {
  return (
    <div className="flex justify-center">
      {Object.values(providers!).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              signIn(provider.id, {
                callbackUrl:
                  process.env[EnvKeys.VERCEL_URL] || 'http://localhost:3000',
              })
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SigninComponent;
