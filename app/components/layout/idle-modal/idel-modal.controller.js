'use strict';

angular
   .module('eAngular.Layout')
  .controller('IdleModalController', ['$scope', '$modalInstance','Auth',
    function($scope, $modalInstance,Auth) {
      /**
       * Expose cancel method to scope
       * @True {[type]}
       */
      $scope.cancel = cancelModal;
      /**
       * Expose submitForm to scope
       * @True {[type]}
       */
      $scope.submitForm = submitForm;
      /**
       * Close opened modal
       *
       * @method cancelModal
       * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
       * @return {[type]}    [description]
       */
      function cancelModal() {
        $modalInstance.dismiss('cancel');
        Auth.logout();
      }
      /**
       * Submit Modal form
       * @method submitForm
       * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
       * @return {[type]}   [description]
       */
      function submitForm(){
        console.info('Modal form submitted::',$scope.modalForm);
      }
    }
  ]);