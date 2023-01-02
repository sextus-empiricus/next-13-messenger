import React from 'react';

import Image from 'next/image';
import { getProviders } from 'next-auth/react';

import { images } from '../../../constants';

import SigninComponent from './SigninComponent';

const SignInPage = async () => {
  const providers = await getProviders();

  return (
    <div className="grid justify-center">
      <div>
        <Image
          src={images.messengerLogo}
          className="mb-8"
          width={500}
          height={500}
          alt="Profile Picture"
        />
      </div>
      <SigninComponent providers={providers} />
    </div>
  );
};

export default SignInPage;
