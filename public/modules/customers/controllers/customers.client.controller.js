'use strict';

// Customers controller

var customersApp = angular.module('customers');

customersApp.controller('CustomersController', ['$scope', '$stateParams', 'Authentication', 'Customers', '$modal', '$log',
	function($scope, $stateParams, Authentication, Customers, $modal, $log ) {

		this.authentication = Authentication;

		// Find a list of Customers
		this.customers = Customers.query();

		// Open a modal window to update a single customer record
		this.modalUpdate = function (size, selectedCustomer) {

			var modalInstance = $modal.open({
				templateUrl: 'modules/customers/views/edit-customer.client.view.html',
				controller: function ($scope, $modalInstance, customer) {

					$scope.customer = customer;


					$scope.ok = function () {

						if($scope.updateCustomerForm.$valid) { /* Bug */
							$modalInstance.close($scope.customer);
						}
					};

					$scope.cancel = function () {
						$modalInstance.dismiss('cancel');
					};
				},
				size: size,
				resolve: {
					customer: function () {
						return selectedCustomer;
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				$scope.selected = selectedItem;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};
	}
]);
customersApp.controller('CustomersCreateController', ['$scope','Customers',
	function($scope,Customers) {

	}
]);
customersApp.controller('CustomersUpdateController', ['$scope','Customers',
	function($scope, Customers) {
		// Update existing Customer
		this.update = function(updatedCustomer) {
			var customer = updatedCustomer;

			customer.$update(function() {
				//$location.path('customers/' + customer._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
	}
]);


customersApp.directive('customerList',[function(){
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: 'modules/customers/views/customer-list-template.html',
			link: function(scope, element, attrs){

			}
		};
	}]);

		//// Create new Customer
		//$scope.create = function() {
		//	// Create new Customer object
		//	var customer = new Customers ({
		//		firstName: this.firstName,
		//		surname: this.surname,
		//		suburb: this.suburb,
		//		country: this.country,
		//		industry: this.industry,
		//		email: this.email,
		//		phone: this.phone,
		//		referred: this.referred,
		//		channel: this.channel
		//	});
        //
		//	// Redirect after save
		//	customer.$save(function(response) {
		//		$location.path('customers/' + response._id);
        //
		//		// Clear form fields
		//		$scope.firstName = '';
		//		$scope.surname = '';
		//		$scope.surname = '';
		//		$scope.suburb = '';
		//		$scope.country = '';
		//		$scope.industry = '';
		//		$scope.email = '';
		//		$scope.phone = '';
		//		$scope.referred = '';
		//		$scope.channel = '';
        //
		//	}, function(errorResponse) {
		//		$scope.error = errorResponse.data.message;
		//	});
		//};
        //
		//// Remove existing Customer
		//$scope.remove = function(customer) {
		//	if ( customer ) {
		//		customer.$remove();
        //
		//		for (var i in $scope.customers) {
		//			if ($scope.customers [i] === customer) {
		//				$scope.customers.splice(i, 1);
		//			}
		//		}
		//	} else {
		//		$scope.customer.$remove(function() {
		//			$location.path('customers');
		//		});
		//	}
		//};
        //

        //
        //
        //
		//// Find existing Customer
		//$scope.findOne = function() {
		//	$scope.customer = Customers.get({
		//		customerId: $stateParams.customerId
		//	});
		//};

