angular.module('waitCalc',['ngRoute', 'ngAnimate'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl : 'home.html'
		})
		.when('/meal',{
			templateUrl : 'meal.html',
			controller : 'mealCtrl'
		})
		.when('/earnings',{
			templateUrl : 'earnings.html',
			controller : 'mealCtrl'
		})
		.otherwise({
			templateUrl : 'home.html'
		})
	}])
	.run(function($rootScope){
		$rootScope.baseMeal = "";
		$rootScope.taxRate = "";
		$rootScope.tipPerct = "";
		$rootScope.subTotal = 0.00;
		$rootScope.tipAmt = 0.00;
		$rootScope.totalCharge = 0.00;
		$rootScope.totalTip = 0.00;
		$rootScope.mealCount = 0;
		$rootScope.tipAverage = 0.00;
	})
	.controller('mealCtrl',['$rootScope', '$scope', function($rootScope, $scope){
		$scope.calculate = function(){
			$rootScope.subTotal = ($scope.baseMeal * ($scope.taxRate/100 + 1));
			$rootScope.tipAmt = ($scope.baseMeal * ($scope.taxRate/100));
			$rootScope.totalCharge = ($scope.subTotal + $scope.tipAmt);	

			$rootScope.totalTip = $scope.totalTip + $scope.tipAmt; 
			$rootScope.mealCount++;
			$rootScope.tipAverage = $scope.totalTip/$scope.mealCount;
		}

		$scope.cancelMeal = function(){
			$scope.baseMeal = "";
			$scope.taxRate = "";
			$scope.tipPerct = "";
		}

		$scope.resetMeal = function(){
			$rootScope.baseMeal = "";
			$rootScope.taxRate = "";
			$rootScope.tipPerct = "";
			$rootScope.subTotal = 0.00;
			$rootScope.tipAmt = 0.00;
			$rootScope.totalCharge = 0.00;
			$rootScope.totalTip = 0.00;
			$rootScope.mealCount = 0;
			$rootScope.tipAverage = 0.00;
		}
	}])
