'use strict';

/* Filters */

angular.module('myApp.filters', []).filter('checkNumber', [function (x) {

    return function (x) {
        if (isNaN(x) || x=='' || x<=0 ) 
		  {
		  
		    return false;
		  }
		  else{
			  return true;
		  }
    };
}]).filter('reverse', [function (x) {

    return function(items) {
	    return items.slice().reverse();
	  };
}]);






