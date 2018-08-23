Reference:
https://aws-amplify.github.io/amplify-js/index.html
https://aws-amplify.github.io/amplify-js/media/storage_guide.html

https://angular.io/
https://github.com/daikiojm/angular-aws-amplify/tree/master/src/app


# debugging ----------------------------------------------------------------------------

var appBucketComponent = document.querySelector('app-bucket');
ng.probe(appBucketComponent)
ng.probe(appBucketComponent).injector
ng.probe(appBucketComponent).injector.view.nodes
  
# ---------------------------------------------------------------------------------------

sample cors

<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>HEAD</AllowedMethod>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>POST</AllowedMethod>
    <AllowedMethod>DELETE</AllowedMethod>
    <MaxAgeSeconds>3000</MaxAgeSeconds>
    <ExposeHeader>x-amz-server-side-encryption</ExposeHeader>
    <ExposeHeader>x-amz-request-id</ExposeHeader>
    <ExposeHeader>x-amz-id-2</ExposeHeader>
    <AllowedHeader>*</AllowedHeader>
</CORSRule>
</CORSConfiguration>

# ---------------------------------------------------------------------------------------

npm install --save aws-amplify
npm install --save aws-amplify-angular

npm i -g awsmobile-cli
awsmobile configure
  access key
  secret access key
  region
  
npm i -g yarn

# Challenges

> error
node_modules/aws-sdk/clients/s3.d.ts(10,24): error TS2307: Cannot find module 'stream'.
node_modules/aws-sdk/clients/s3.d.ts(777,22): error TS2304: Cannot find name 'Buffer'.
...
...
node_modules/aws-sdk/lib/dynamodb/document_client.d.ts(2,25): error TS2307: Cannot find module 'stream'.
node_modules/aws-sdk/lib/dynamodb/document_client.d.ts(93,30): error TS2304: Cannot find name 'Buffer'.
< attempts
- npm -i -d @types/node
- from tsconfig.app.json remove "types": []

> angular global is not defined
- Add (window as any).global = window; to polyfills.ts

> Cannot perform specific action because there does not exist a valid use pool domain associated with the user pool
- email verification link can be used only with a domain name 
- else use verification code
