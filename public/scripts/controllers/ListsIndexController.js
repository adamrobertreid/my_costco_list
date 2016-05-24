angular
.module('my_costco_list')
.controller('ListsIndexController', ListsIndexController);

ListsIndexController.$inject = ['$http'];

function ListsIndexController ($http) {
  var vm = this;
  vm.newList = {};
  vm.newList = {
    name: 'I need to get this'
  };

  $http({
    method: 'GET',
    url: '/api/lists'
  }).then(function successCallback(response){
    vm.lists = response.data;
  }, function errorCallback(response){
    console.log('Error with gettingyour data', response);
  });

  vm.createList = function () {
    $http({
      method: 'POST',
      url: '/api/lists',
      data: vm.newList
    }).then(function successCallback(response){
      vm.list.push(response.data);
    }, function errorCallback(response) {
      console.log('There was an error posting your data', response);
    });
  };

  vm.editList = function(list){
    $http({
      method: 'PUT',
      url: '/api/lists' + list._id,
      data: list
    }).then(function successCallback(json){
    }, function errorCallback(response){
      console.log('There was an error with your update data', response);
    });
  };

 vm.deleteList = function(list){
   $http({
     method: 'DELETE',
     url: '/api/lists' + list._id
   }).then(function successCallback(json){
     var index = vm.lists.indexOf(list);
     vm.lists.splice(index,1);
   }, function errorCallback(response){
     console.log('There was an error with your delete', response);
   });
 };

}
