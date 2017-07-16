angular.module('project', ['ngRoute', 'firebase'])

    .value('fbURL', 'https://ng-projects-list.firebaseio.com/')

    .service('fbRef', function (fbURL) {
        return new Firebase(fbURL);
    })

    .service('fbAuth', function ($q, $firebase, $firebaseAuth, fbRef) {
        var auth;
        return function () {
            if(auth) return $q.when(auth);
            var authObj = $firebaseAuth(fbRef);
            if(authObj.$getAuth()) {
                return $q.when(auth = authObj.$getAuth());
            }
        }
    })


