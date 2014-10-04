'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);




angular.module('myApp.directives', []).directive('addElement', [function () {
    return {
	    restrict: 'AE',
	    scope: {
			ctrlAddAmmount: '&callback',
			currency:'='
		},
	    templateUrl: 'partials/add-element.html',
	    link: function(scope, element, attrs){
	    
	    },
	    controller: function($scope,$filter){
	    	
	    	$scope.addAmmount = function()
	    	{
		    	if($filter('checkNumber')($scope.ammountAdd)){
				    var ammount = {}
				    var now = new Date();
				    
				    ammount.val = parseFloat($scope.ammountAdd);
				    ammount.dateAdded = now.format("d/M/y h:m:s");
				    ammount.infostatus = 'added';
				    $scope.ctrlAddAmmount({arg1: ammount});	
					$scope.ammountAdd = '';   
				
			    }else{
				    $scope.ammountAdd = '';
			    }
		    	
	    	}
	    	$scope.addAmmountSelect = function()
		    {
		    	$scope.ammountAdd = $scope.ammountSelect;
			    $scope.addAmmount();
			    
		    }
	    
	    }
    };
}]).directive('removeElement', [function () {
    return {
	    restrict: 'AE',
	    scope: {
			ctrlAmmount: '&callback',
			currency:'='
		},
	    templateUrl: 'partials/remove-element.html',
	    link: function(scope, element, attrs){
	    	
	    },
	    controller: function($scope,$filter){
	    	
	    	$scope.removeAmmount = function()
	    	{
		    	if($filter('checkNumber')($scope.ammountRemove)){
				    var ammount = {}
				    var now = new Date();
				    
				    ammount.val = parseFloat($scope.ammountRemove);
				    ammount.dateAdded = now.format("d/M/y h:m:s");
				    ammount.infostatus = 'remove';
				    $scope.ctrlAmmount({arg1: ammount});	
					$scope.ammountRemove = '';   
				
			    }else{
				    $scope.ammountRemove = '';
			    }
		    	
	    	}
	    	$scope.addAmmountSelect = function()
		    {
		    	$scope.ammountRemove = $scope.ammountSelect;
			    $scope.addAmmount();
			    
		    }
	    
	    }
    };
}]);;


