'use strict';

/* Controllers */


function GenericViewCtrl($scope, $filter) {
}
GenericViewCtrl.$inject = ['$scope'];


function WalletCtrl($scope, $http, $filter, $sce, LS) {

	

    $scope.ammounts = [];
    $scope.error = false;

	
	/*****************/
	/* Updates the local storage */
	/*****************/   
	$scope.updateLocalStorage = function(val) {
	    return LS.setData(val);
	};
	
	/*****************/
	/* Updates the local storage */
	/*****************/  
	$scope.getDataLocalStorage = function() {
	    var data = LS.getData();
	    console.log(data);
	    if(data){
		   $scope.ammounts = data; 
	    }
	};
	$scope.getDataLocalStorage();

	/*****************/
	/* Change Currency function */
	/*****************/
	$scope.changeCurrency = function()
	{
		$scope.currency =  $scope.currencies[$scope.currencySel];
	}
	
	
	/*****************/
	/* Change Currency function */
	/*****************/
	$scope.showError = function(error)
	{
		$scope.error = error;
	};
    
    
    /*****************/
	/* Add an ammount (from directive) */
	/*****************/
    $scope.addAmmount = function(am)
    {
	  	var total = $scope.getTotal();
	    $scope.ammounts.push(am);
	    $scope.updateLocalStorage($scope.ammounts);
    }


	/*****************/
	/* Removes an ammount (from directive) */
	/*****************/
	$scope.removeAmmount = function(am)
	{
		var total = $scope.getTotal();
		if(am.val<=total){
			$scope.ammounts.push(am);
			$scope.updateLocalStorage($scope.ammounts);	
		}else{
			$scope.error = 'You don\'t have enought credit';

		}
		
	}
    

	/*****************/
	/* Empty the wallet and the local storage */
	/*****************/   
    $scope.resetWallet = function()
    {
	  $scope.ammounts = []; 
	  $scope.updateLocalStorage($scope.ammounts);
    };
    
    
    /*****************/
	/* Calculate the total of money */
	/*****************/       
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




