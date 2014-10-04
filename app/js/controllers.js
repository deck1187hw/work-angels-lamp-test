'use strict';

/* Controllers */


function GenericViewCtrl($scope, $filter) {
}
GenericViewCtrl.$inject = ['$scope'];


function WalletCtrl($scope, $http, $filter) {

	
    $scope.total = 0;
    $scope.ammounts = [];
    $scope.error = false;
    $scope.currency = 'usd';


    
    $scope.addAmmount = function(am)
    {
	  	var total = $scope.getTotal();
	    $scope.ammounts.push(am); 
	    
	    
    }

	$scope.removeAmmount = function(am)
	{
		$scope.ammounts.push(am);
	}
    
   
    
    
    
    
     $scope.getTotal = function(){
	    var total = 0;
	    for(var i = 0; i < $scope.ammounts.length; i++){
	        var am = $scope.ammounts[i];
	        total += parseFloat(am.val,10);
	    }
	    return total;
	}
    
    
    

}

ContactViewCtrl.$inject = ['$scope', '$http'];



