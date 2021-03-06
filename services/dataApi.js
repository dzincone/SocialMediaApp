(function () {
    'use strict';

    angular.module("socialpostal").factory('dataApi', ['$state', '$http', '$q', '$timeout', '$location', '$window', "API", dataApi]);
    function dataApi($state, $http, $q, $timeout, $location, $window, API) {

      // function login(){
      //
      //   var deferred = $q.defer();
      //
      //       //check for a token in local storage & test it if found
      //       var authToken = localStorage.getItem("lyneup-token");
      //
      //       if (authToken == null || authToken.length < 10) {
      //           deferred.reject("Needs login");
      //           $state.go("home");
      //       }
      //       else {
      //           $http.defaults.headers.common.Authorization = "Bearer " + authToken;
      //           //console.log($http.defaults.headers.common.Authorization);
      //           $http.get("http://localhost:3000/api/checkAuth")
      //               .success(function (data) {
      //                   deferred.resolve();
      //               })
      //               .error(function () {
      //                   //console.log("login checkauth error");
      //                   if (localStorage.getItem("lyneup-token")) localStorage.removeItem("lyneup-token")
      //                   deferred.reject("Login checkAuth failed");
      //                   $state.go("home");
      //               });
      //       }
      //
      //   return deferred.promise;
      // }

      function registerUser(user){
        console.log(user);
        var deferred = $q.defer();
        var d = angular.toJson(user);
        var url = API + 'register';
        console.log(url);
        $http({
          method: "POST",
          url: url,
          data: d,
          headers: { 'Content-Type': 'application/json'}
        })
            .success(function(data) {
              authToken.setToken(data.token)
              register = true;
              deferred.resolve(data,register)
            })
           .error(function (data, status, headers, config) {
               var message = alert('warning', "Ooops", "Could not register")
               deferred.reject(message);
           });
        return deferred.promise
      }

      function loginUser(user){
        var deferred = $q.defer();
        var d = angular.toJson(user);
        console.log(d, "new user");
        var url = API + "login";
        $http({
          method: "POST",
          url: url,
          data: d,
          headers: { 'Content-Type': 'application/json'}
        })
            .success(function(data) {
              deferred.resolve(data)
            })
           .error(function (data, status, headers, config) {
               deferred.reject();
           });
        return deferred.promise
      }

      function getNewUser(){
        console.log('getting new user now');
        var deferred = $q.defer();
        var url = API + "newUser"
        $http.get(url)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject();
            });
          return deferred.promise
      }

      function getUser(){
        var deferred = $q.defer();
        var url = API + "user"
        $http.get(url)
            .success(function (data) {
              console.log(data);
                deferred.resolve(data);
            })
            .error(function (err) {
              console.log("hello");
                var message = alert('warning', "Unable to get User", err.message)
                deferred.reject(message);
            });
          return deferred.promise
      }

      function getUsers(){
        var deferred = $q.defer();
        var url = API + "users"
        $http.get(url)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject();
            });
          return deferred.promise
      }

      // function getLeague(id){
      //   var deferred = $q.defer();
      //   var url = "http://localhost:3000/api/league"
      //   if(id) url += ("?id=" + id)
      //   $http.get(url)
      //       .success(function (data) {
      //           deferred.resolve(data);
      //       })
      //       .error(function (data, status, headers, config) {
      //           deferred.reject();
      //       });
      //     return deferred.promise
      // }

      // function getLeagues(){
      //   var deferred = $q.defer();
      //   var url = "http://localhost:3000/api/leagues"
      //   $http.get(url)
      //       .success(function (data) {
      //           deferred.resolve(data);
      //       })
      //       .error(function (data, status, headers, config) {
      //           deferred.reject();
      //       });
      //     return deferred.promise
      // }


      return {
        registerUser: registerUser,
        loginUser: loginUser,
        getUsers: getUsers,
        getNewUser: getNewUser,
        getUser: getUser,
      }
    }
})()
