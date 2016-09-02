
function HelloWorld(name) {
    this.name = name;
}

HelloWorld.prototype.say = function (hello) {
    return this.name + ' say ' + hello + ' to you.';
};

module.exports = HelloWorld;