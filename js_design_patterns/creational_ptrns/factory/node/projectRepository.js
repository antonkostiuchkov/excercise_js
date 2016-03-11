var Repo = function () {

    var get = function(id){
        console.log('Getting project ' + id);
        return {
            name: 'Project No:1'
        };
    };

    var save = function(project){
        console.log('Saving ' + project.name + ' to the db');
    };

    return {
        get: get,
        save: save
    };
};

module.exports = Repo();
