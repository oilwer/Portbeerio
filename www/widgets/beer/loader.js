app.directive('beerLoader', [
  "settings",
  function(
    settings
  ) {

    return {
      templateUrl: settings.widgets + 'beer/loader.html',
      link: function(scope, element, attrs) {


      }
    };
  }
]);