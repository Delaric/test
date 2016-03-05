var app = angular.module('myApp', []);
app.run(function($rootScope) {
	$rootScope.name = "Gilman House";
});
app.controller('PlayerController', ['$scope', function($scope) {
	$scope.playing = false;
	$scope.audio = document.createElement('audio');
	$scope.audio.src = 'http://ec.libsyn.com/p/c/9/f/c9fc121a12372275/Episode_65.mp3';
}]);

app.controller('RelatedController', ['$scope', function($scope) {
}]);
