function StaffController() {
  var vm = this;
  vm.name = 'The Ox';
  vm.email = 'ox@awesome.com';
  vm.phone = '867-5309';
}

angular.module('app')
  .controller('StaffController', StaffController);
