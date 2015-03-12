angular
  .module('tas')
  .controller('EditController', EditController);


function EditController ($routeParams, $location, taFactory, COHORT_OPTIONS) {
  var vm = this,
      id = $routeParams.uuid;


  taFactory.findOne(id, function (ta) {
    vm.newTA = ta;
  })

  vm.cohortOptions = COHORT_OPTIONS;

  vm.addOrEditTA = function () {
    // $http
    //   .put('https://mytas.firebaseio.com/tas/' + id + '.json',
    //     vm.newTA
    //   )
    //   .success(function (data) {
    //     $location.path('/tas')
    //   });

    taFactory.update(id, vm.newTA, function () {
      $location.path('/tas')
    })

  };

};