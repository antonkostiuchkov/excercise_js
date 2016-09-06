
const Bear = function Bear (type) {
  this.type = type || 'any'
}

Bear.prototype.growl = function () {
  return 'The ' + this.type + ' bear says grrr'
}

export default Bear
