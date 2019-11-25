ng new service-worker

ng s --o


# App Shell
ng g appShell --clientProject=service-worker --universalProject=service-worker-server

ng run service-worker:app-shell
ng run service-worker:app-shell:production

# Add service worker
ng add @angular/pwa --project service-worker

ng build --prod

npm i -g http-server
http-server -p 8080 -c-1 dist/service-worker









References:
https://angular.io/guide/service-worker-intro

