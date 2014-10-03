'use strict';

/* Filters */





angular.module('myApp.filters', []).filter('checkNumber', [function (x) {
    return function (x) {
        if (isNaN(x)) 
		  {

		    return false;
		  }
		  else{
			  return true;
		  }
    };
}]);