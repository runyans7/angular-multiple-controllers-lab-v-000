function ContactController() {
  var vm = this;
  vm.name = 'Paul Bunyan';
  vm.email = 'paul@awesome.com';
  vm.phone = '867-5309';

  vm.changeName = function() {
    vm.name = "Scotty";
  }
}

angular.module('app')
  .controller('ContactController', ContactController);
