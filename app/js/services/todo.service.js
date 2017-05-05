todoApp.factory('todoData', function($resource) {
    return $resource('/data/tasks/', {}, {
        getTasks: { method: "GET", isArray: true },
        saveTasks: { method: "POST", isArray: true}
    });
    // return {
    //     getTasks: function() {
    //         return resource.get();
    //     },
    //     getTasks:function(tasks) {
    //         return resource.save(tasks);
    //     }
    // }
});