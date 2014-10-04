'use strict';

/* Services */

var services = angular.module('myApp.services', []);

services.value('version', '0.1');


services.factory("LS", function($window, $rootScope) {
  angular.element($window).on('storage', function(event) {
    if (event.key === 'wallet-storage1') {
      $rootScope.$apply();
    }
  });
  return {
    setData: function(val) {
      $window.localStorage && $window.localStorage.setItem('wallet-storage1', JSON.stringify(val));
      return this;
    },
    getData: function() {
    	var data = $window.localStorage && $window.localStorage.getItem('wallet-storage1');
    	if(data){
	    	return JSON.parse(data);
    	}
      
    }
  };
});

