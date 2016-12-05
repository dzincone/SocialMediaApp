(function () {
    'use strict';

    angular.module("socialpostal").controller('HomeCtrl', ['$rootScope', '$window', '$scope', HomeCtrl]);

    function HomeCtrl($rootScope, $window, $scope, dataApi) {
        var vm = this;
        document.title = "Social Postal";
        console.log('hello');

      angular.element($window).on('resize', function () {
        $scope.$apply(function () {
          vm.height = window.innerHeight + 'px';
        });
      });

      vm.height = window.innerHeight + 'px';

    };
  })();
