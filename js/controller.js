(function () {
    'use strict';

    angular.module("socialpostal").controller('HomeCtrl', ['$rootScope', '$window', '$scope', 'authInterceptor', 'authToken', 'dataApi', HomeCtrl]);

    function HomeCtrl($rootScope, $window, $scope, authInterceptor, authToken, dataApi) {
        var vm = this;
        document.title = "Social Postal";
        console.log('hello');

      angular.element($window).on('resize', function () {
        $scope.$apply(function () {
          vm.height = window.innerHeight + 'px';
        });
      });

      vm.height = window.innerHeight + 'px';

      vm.signUp = function(user){
        console.log(user);
        dataApi.getNewUser().then(function(data){
          console.log('completed');
        }, function(err){
          console.log('had some trouble here');
        })
      }

    };
  })();
