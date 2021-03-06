hybridapp.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.backButton.previousTitleText(false);

    $stateProvider
    
    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html',
        controller: 'AppCtrl'
    })

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.location', {
        url: '/location',
        views: {
            'menuContent': {
                templateUrl: 'templates/location.html',
                controller: "LocationCtrl"
            }
        }
    })

    .state('app.location.details', {
        url: '/details/:name',
        views: {
            'menuContent@app': {
                templateUrl: function ($routeParams) {
                    return "content/mobileapps/qantas/en/welcome/locations/" + $routeParams.name + '.template.html';
                },
                controller: "LocationDetailsCtrl"
            }
        }
    })

    .state('app.about', {
        url: '/about',
        views: {
            'menuContent': {
                templateUrl: 'content/mobileapps/qantas/en/welcome/about.template.html'
            }
        }
    })

    .state('app.welcome', {
        url: '/welcome',
        views: {
            'menuContent': {
                templateUrl: 'content/mobileapps/qantas/en/welcome.template.html'
            }
        }
    })

    .state('tab.welcome', {
        url: '/welcome',
        views: {
            'tab-home': {
                templateUrl: 'content/mobileapps/qantas/en/welcome.template.html'
            }
        }
    })

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html'
            }
        }
    })

    .state('app.news', {
        url: '/news',
        views: {
            'menuContent': {
                templateUrl: 'content/mobileapps/qantas/en/welcome/news-and-events.template.html'
            }
        }
    })

    .state('app.news.article', {
        url: '/article/:name',
        views: {
            'menuContent@app': {
                templateUrl: function ($routeParams) {
                    return "content/mobileapps/qantas/en/welcome/news-and-events/" + $routeParams.name + '.template.html';
                },
            }
        }
    })

    .state('app.profileupdate', {
        url: '/profileupdate',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile_update.html',
                controller: "ProfileCtrl"
            }
        }
    })

    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: "ProfileCtrl"
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/welcome');
})