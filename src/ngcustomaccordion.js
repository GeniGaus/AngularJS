(function(root, factory) {
  'use strict'
  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['angular'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    // to support bundler like browserify
    var angularObj = angular || require('angular')
    if ((!angularObj || !angularObj.module) && typeof angular != 'undefined') {
      angularObj = angular
    }
    module.exports = factory(angularObj)
  } else {
    // Browser globals (root is window)
    factory(root.angular)
  }
})(this, function(angular){
	'use strict'
	
	var module = angular
		.module("ngCustomAccordion", [])
		.directive("gmCustomAccordion", function(){
			return {
				restrict: 'E',
				templateUrl: '/ngcustomaccordion.html',
				scope: {},
				bindToController: {},
				controller: function($scope){
					var vm = this;
					vm.colMax = 3;
					vm.cols = [];
					vm.accordionState = -1;
					vm.colorList = [{"hexCode": "#493D26"},
									   {"hexCode": "#C47451"},
									   {"hexCode": "#E77471"},
									   {"hexCode": "#7D0552"},
									   {"hexCode": "#2B547E"}];
					
					for(var i = 1; i <= vm.colMax; i++){
						vm.cols.push(i);
					}
					vm.getStyle = function(colorId){
						return vm.colorList.filter(function(color){
							return (color.ID === colorId);
						});
					}
					vm.toggleAccordion = function(id){
						vm.accordionState = (vm.accordionState != id)? id : -1;
					}
				},
				controllerAs: 'vm'
			}
		});
		
	return module.name;
});
