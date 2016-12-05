var app = angular.module("socialpostal", ['ui.router', 'ui.bootstrap'])

    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $stateProvider
            .state('home', { url: "/", templateUrl: "templates/home/home.html" })

            ;

        $urlRouterProvider.otherwise('/');

        $httpProvider.interceptors.push('authInterceptor')


    })

  .constant('API', 'http://localhost:3000/api/')

  .run(function ($state) {
      $state.go('home');
  });

  function InitializeTheApp() {
    angular.bootstrap(document, ["socialpostal"]);
}
