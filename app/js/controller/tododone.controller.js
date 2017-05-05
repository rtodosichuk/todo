todoApp.controller('todoDoneController', 
    function todoDoneController ($scope, todoData) {
        $scope.title = 'My Done List';
        $scope.showDone =  true;
        $scope.tasks = todoData.getTasks();

        $scope.deleteTask = function(task) {            
            // Remove the task base on ID.
            //Save the tasks.
            $scope.tasks.removeValue('id', task.id);
            this.saveAllTasks(); 
        };

        Array.prototype.removeValue = function(name, value) {
            var array = $.map(this, function(v, i) {
                return v[name] === value ? null : v;
            });

            this.length = 0;
            this.push.apply(this, array);
        };
    }
);