'use strict';

/* Controllers */


function GenericViewCtrl($scope, $filter) {
}
GenericViewCtrl.$inject = ['$scope'];


function WalletCtrl($scope, $http, $filter, $sce, LS) {

	
	// Update the data in local storage
	
	$scope.updateLocalStorage = function(val) {
	    return LS.setData(val);
	};
	
	
	
    $scope.total = 0;
    $scope.ammounts = [];
    $scope.error = false;

	
	$scope.changeCurrency = function()
	{
		$scope.currency =  $scope.currencies[$scope.currencySel];
	}

	$scope.showError = function(error)
	{
		$scope.error = error;
	};
    
    
    $scope.addAmmount = function(am)
    {
	  	var total = $scope.getTotal();
	    $scope.ammounts.push(am);
	    $scope.updateLocalStorage($scope.ammounts);
    }



	$scope.removeAmmount = function(am)
	{
		var total = $scope.getTotal();
		if(am.val<=total){
			$scope.ammounts.push(am);
			$scope.updateLocalStorage($scope.ammounts);	
		}else{
			
			$scope.error = 'You don\'t have enought credit';
			console.log($scope.error);
		}
		
	}
    
   
    $scope.resetWallet = function()
    {
	  $scope.ammounts = [];  
    };
    
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
	
	
	    
    
    
	$scope.currencies = new Array();
	var curobj = {}
		curobj.entityHtml = '&#163;';
		curobj.name = 'pound';	
		curobj.fontawesome = 'gbp';		
	$scope.currencies.push(curobj);
	
	
	var curobj = {}
		curobj.entityHtml = '&#x24;';
		curobj.name = 'dollar';	
		curobj.fontawesome = 'usd';		
	$scope.currencies.push(curobj);
	
	
	var curobj = {}
		curobj.entityHtml = '&#x80;';
		curobj.name = 'euro';	
		curobj.fontawesome = 'euro';		
	$scope.currencies.push(curobj);
	
	$scope.currency = $scope.currencies[0];
	$scope.currencySel = 0;
	
	
    
    
    

}




