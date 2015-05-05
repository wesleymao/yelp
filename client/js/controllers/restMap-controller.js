app.controller('restMapController', ['$scope', '$resource', function($scope,$resource){

	var Rest = $resource('/api/rests/Peoria');

	
	$scope.wholeList = [];
	$scope.rests = [];
	var current = 0;
	var max = 215;

	var height = 700,
		width = 1000,
		barWidth = 50,
		barOffset = 5;

	Rest.query(function (results){
		$scope.rests = results;

		d3.select("svg")
		.attr('width', width)
		.attr('height', height)
		.style('background', '#ffffff')
		.selectAll('circle').data($scope.rests)
		.enter().append('circle')
			.style('fill', function (d){
				return d.categories;
			})
			.attr('cy', function (d){
				return (d.latitude)
			})
			.attr('cx', function (d){
				return (d.longitude)
			})
			.attr('r', 3)

	});

	$scope.getCity = function(){
		var rest = $resource('/api/rests/' + $scope.cityName);
			rest.query(function (results){
				$scope.rests = results;

				d3.select("svg").selectAll('*').remove();
				d3.select("svg")
				.selectAll('circle').data($scope.rests)
				.enter().append('circle')
					.style('fill', function (d){
						return d.categories;
					})
					.attr('cy', function (d){
						return (d.latitude)
					})
					.attr('cx', function (d){
						return (d.longitude)
					})
					.attr('r', 3)
			});
		
	};

}]);

