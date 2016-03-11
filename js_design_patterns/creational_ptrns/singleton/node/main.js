var taskHandler = require('./taskHandler');
var myrepo = require('./Repo');
var myrepo2 = require('./Repo');

myrepo.save('fromMain');
myrepo.save('fromMain');
myrepo.save('fromMain');

taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();

myrepo2.save('fromMain');
myrepo2.save('fromMain');
myrepo2.save('fromMain');
myrepo2.save('fromMain');