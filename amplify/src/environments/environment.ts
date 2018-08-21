// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  amplify: {
    Auth: {
      angular: {
        identityPoolId: 'us-east-1:7ea8f079-9171-4563-bac7-fb580bc96a50',
        region: 'us-east-1',
        userPoolId: 'us-east-1_QgX2kI3Lp',
        userPoolWebClientId: '30mqqhd49kel6033ua0mvsk4cq'
      }
    }
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
