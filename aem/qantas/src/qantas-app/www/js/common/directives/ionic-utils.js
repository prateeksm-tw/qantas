angular.module('ionic.utils', [])

.factory('$localstorage', ['$window', function ($window) {
    return {
      set: function (key, value) {
        $window.localStorage[key] = value;
      },
      get: function (key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
      },
      setObject: function (key, value) {
        $window.localStorage[key] = JSON.stringify(value);
      },
      getObject: function (key) {
        return JSON.parse($window.localStorage[key] || '{}');
      }
    };
  }])

  .factory('$ionicLoader', ['$ionicLoading', function ($ionicLoading) {

    function _showLoadingText() {
      $ionicLoading.show({
        template: '<ion-spinner icon="ripple" class="spinner-light"></ion-spinner>',
        animation: 'fade-in',
        showBackdrop: true
      });
    }

    return {
      showLoadingText: function (message) {
          _showLoadingText();
      },
      hideLoadingText: function (message) {
        $ionicLoading.hide();
      }
    };
    }
  ])
