todoApp.controller('todoController', 
    function todoController ($scope, todoData) {
        $scope.title = 'My Todo List';
        $scope.showDone =  true;
        $scope.tasks = todoData.getTasks();
        $scope.edittask = null;

        $scope.detailView = function(task) {
            $scope.edittask = task;
        };

        $scope.addTask = function() {
            if ($scope.formTodo && $scope.formTodo.length > 0) {
                var maxtask = _.max($scope.tasks, function(task) {return task.id});
                $scope.tasks.push({id: maxtask.id + 1, name: $scope.formTodo, due: moment().format("MM/DD/YYYY"), done: false });
                $scope.formTodo = '';
                this.saveAllTasks(); 
            }
        };

        $scope.deleteTask = function(task) {            
            // Remove the task base on ID.
            //Save the tasks.
            $scope.tasks.removeValue('id', task.id);
            this.saveAllTasks(); 
        };

        $scope.saveTask = function() {
            if ($scope.edittask.name.length > 0) {
                this.saveAllTasks();
            }
        };

        $scope.saveAllTasks = function() {
            console.log("Save all " + $scope.tasks.length + " task");
            todoData.saveTasks($scope.tasks)
                .$promise
                .then(function(response) { console.log('success', response);  $scope.edittask = null; })
                .catch(function(response) { console.log('failure', response)});
        };

        $scope.cancelTask = function() {
            console.log("canel task edit.");
            $scope.edittask = null;
            $scope.tasks = todoData.getTasks();
        }

        Array.prototype.removeValue = function(name, value) {
            var array = $.map(this, function(v, i) {
                return v[name] === value ? null : v;
            });

            this.length = 0;
            this.push.apply(this, array);
        };
    }
);