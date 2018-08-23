const region = 'us-east-1';

const augBucket = 'test-aug-bucket';

const augPool = {
  userPoolId: 'us-east-1_jPBiZJltm',
  appClientId: '4b5mel5kbfe66emskjfoj64gpl',
  identityPoolId: 'us-east-1:fb232da5-18c8-43c9-a380-27f2ed6a4345'
};

export const environment = {

  production: false,

  amplify: {

    region: 'us-east-1',

    auth: {
      identityPoolId: augPool.identityPoolId,
      region: region,
      userPoolId: augPool.userPoolId,
      userPoolWebClientId: augPool.appClientId
    },

    storage: {
      bucket: augBucket,
      region: region
    }

  }

};
