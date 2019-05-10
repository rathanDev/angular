#ng generate module app-routing --flat --module=app
ng generate component dashboard


#Upgrade angular dependency versions
ng update @angular/cli @angular/core

error:
The serve command requires to be run in an Angular project, but a project definition could not be found.


ng update @angular/cli --migrate-only --from=1.7.3

It ->
DELETE .angular-cli.json
CREATE angular.json (3585 bytes)
