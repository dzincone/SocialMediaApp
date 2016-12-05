var app = angular.module("socialpostal", ['ui.router', 'ui.bootstrap'])

    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $stateProvider
            .state('home', { url: "/", templateUrl: "templates/home/home.html" })

            ;

        $urlRouterProvider.otherwise('/');

    })


  .run(function ($state) {
      $state.go('home');
  });

  function InitializeTheApp() {
    angular.bootstrap(document, ["socialpostal"]);
}
