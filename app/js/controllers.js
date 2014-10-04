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

	$scope.showError = function(error)
	{
		$scope.error = error;
	};
    
    $scope.addAmmount = function(am)
    {
	  	var total = $scope.getTotal();
	    $scope.ammounts.push(am); 
	    
	    
    }

	$scope.removeAmmount = function(am)
	{
		var total = $scope.getTotal();
		if(am.val<=total){
			$scope.ammounts.push(am);	
		}else{
			
			$scope.error = 'You don\'t have enought credit';
			console.log($scope.error);
		}
		
	}
    
   
    
    
    
    
     $scope.getTotal = function(){
	    var total = 0;
	    for(var i = 0; i < $scope.ammounts.length; i++){
	        var am = $scope.ammounts[i];
	        if(am.infostatus=='added'){
		        total += parseFloat(am.val,10);
	        }else{
		    	total -= parseFloat(am.val,10);    
	        }
	        
	    }
	    return total;
	}
    
    
    

}




