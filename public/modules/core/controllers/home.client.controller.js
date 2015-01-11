'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.alerts = [
			{
				icon: 'glyphicon-user',
				colour: 'btn-success',
				total: '20,408',
				description: 'Total Customer'
			},
			{
				icon: 'glyphicon-calendar',
				colour: 'btn-primary',
				total: '8,382',
				description: 'Upcoming Events'
			},
			{
				icon: 'glyphicon-edit',
				colour: 'btn-success',
				total: '527',
				description: 'New Customer in 2014'
			},
			{
				icon: 'glyphicon-record',
				colour: 'btn-info',
				total: '85,000',
				description: 'Emails Sent'
			},
			{
				icon: 'glyphicon-eye-open',
				colour: 'btn-warning',
				total: '268',
				description: 'Follow up Required'
			},
			{
				icon: 'glyphicon-flag',
				colour: 'btn-danger',
				total: '348',
				description: 'Referrals to Moderate'
			}
		];
	}
]);
