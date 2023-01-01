import React from 'react';

import Image from 'next/image';
import { getProviders } from 'next-auth/react';

import { images } from '../../../constants';

import SigninComponent from './SigninComponent';

const SignInPage = async () => {
  const providers = await getProviders();

  return (
    <div>
      <div>
        <Image
          src={images.metaLogo}
          className=""
          width={700}
          height={700}
          alt="Profile Picture"
        />
      </div>
      <SigninComponent providers={providers} />
    </div>
  );
};

export default SignInPage;
