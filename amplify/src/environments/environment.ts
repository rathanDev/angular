const region = 'us-east-1';

export const environment = {

  production: false,

  amplify: {

    region: 'us-east-1',

    auth: {
      identityPoolId: 'us-east-1:fb232da5-18c8-43c9-a380-27f2ed6a4345',
      region: region,
      userPoolId: 'us-east-1_jPBiZJltm',
      userPoolWebClientId: '4b5mel5kbfe66emskjfoj64gpl'
    },

    storage: {
      bucket: 'test-aug-bucket',
      region: region
    }

  }

};
