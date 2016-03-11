var Repo = function () {

    var get = function(id){
        console.log('Getting user ' + id);
        return {
            name: 'Admin'
        };
    };

    var save = function(user){
        console.log('Saving ' + user.name + ' to the db');
    };

    return {
        get: get,
        save: save
    };
};

module.exports = Repo();
