angular.module('waitCalc',[])
	.controller('mealCtrl',['$scope',function($scope){
		$scope.baseMeal = "";
		$scope.taxRate = "";
		$scope.tipPerct = "";
		$scope.subTotal = 0.00;
		$scope.tipAmt = 0.00;
		$scope.totalCharge = 0.00;
		$scope.totalTip = 0.00;
		$scope.mealCount = 0;
		$scope.tipAverage = 0.00;

		$scope.calculate = function(){
			$scope.subTotal = ($scope.baseMeal * ($scope.taxRate/100 + 1));
			$scope.tipAmt = ($scope.baseMeal * ($scope.taxRate/100));
			$scope.totalCharge = ($scope.subTotal + $scope.tipAmt);	

			$scope.totalTip = $scope.totalTip + $scope.tipAmt; 
			$scope.mealCount++;
			$scope.tipAverage = $scope.totalTip/$scope.mealCount;
		}

		$scope.cancelMeal = function(){
			$scope.baseMeal = "";
			$scope.taxRate = "";
			$scope.tipPerct = "";
		}

		$scope.resetMeal = function(){
			$scope.baseMeal = "";
			$scope.taxRate = "";
			$scope.tipPerct = "";
			$scope.subTotal = 0.00;
			$scope.tipAmt = 0.00;
			$scope.totalCharge = 0.00;
			$scope.totalTip = 0.00;
			$scope.mealCount = 0;
			$scope.tipAverage = 0.00;
		}

	}]);