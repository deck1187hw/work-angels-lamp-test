'use strict';

/* Controllers */


function GenericViewCtrl($scope, $filter) {
}
GenericViewCtrl.$inject = ['$scope'];


function WalletCtrl($scope, $http, $filter) {

	
    $scope.total = 0;
    $scope.ammounts = [];
    $scope.errors = '';
    $scope.currency = 'usd';

    
    $scope.addAmmount = function()
    {
	    if($filter('checkNumber')($scope.ammountAdd)){
		    var ammount = {}
		    var now = new Date();
			
		    
		    ammount.val = parseFloat($scope.ammountAdd);
		    ammount.dateAdded = now.format("d/M/y h:m:s");
		    $scope.ammounts.push(ammount);    
		     $scope.getTotal();
	    }else{
		    $scope.ammountAdd = '';
	    }
    }
    
    
    
    
    $scope.getTotal = function(){
	    var total = 0;
	    for(var i = 0; i < $scope.ammounts.length; i++){
	        var am = $scope.ammounts[i];
	        total += parseFloat(am.val,10);
	  
	    }
	    return total.toFixed(1);
	}
    
    
    

}

ContactViewCtrl.$inject = ['$scope', '$http'];



