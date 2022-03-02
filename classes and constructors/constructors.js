// use class syntax to define a constructor function
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
var zeus = new SpaceShuttle("jupiter");
console.log(zeus.targetPlanet);

function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name);

// use getters and setters to control access to an objec
function makeClass2() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }
    // getter
    get temperature() {
      return this._temp;
    }
    // setter
    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }

  return Thermostat;
}
const Thermostat = makeClass2();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
