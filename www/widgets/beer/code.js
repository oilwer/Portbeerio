app.directive('beerCode', [
  "settings",
  function(
    settings
  ) {

    return {
      templateUrl: settings.widgets + 'beer/code.html',
      link: function(scope, element, attrs) {


      }
    };
  }
]);