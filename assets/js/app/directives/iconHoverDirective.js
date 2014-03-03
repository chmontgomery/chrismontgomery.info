(function() {
  'use strict';
  var module = angular.module('directives.iconHoverDirective', [
  ]);

  module.directive('iconHover', function() {
    return {
      restrict:'A',
      link: function(scope, element, attrs) {

        function handlerIn(e) {
          if (attrs.imgHoverSrc) {
            $(element).attr('src', attrs.imgHoverSrc);
          }
        }

        function handlerOut(e) {
          if (attrs.imgHoverSrc) {
            $(element).attr('src', attrs.imgSrc);
          }
        }

        $(element).hover(handlerIn, handlerOut);
      }
    };
  });
})();