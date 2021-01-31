// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name){
    drivers.push(name)
}
function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name){
    drivers.pop(name)
}
function destructivelyRemoveFirstDriver(name){
    drivers.shift(name)
}

function appendDriver(name) {
    const new_drivers = [...drivers, name]
    return new_drivers
  }

  function prependDriver(name) {
      const new_drivers = [name,...drivers]
      return new_drivers
  }

  function removeLastDriver() {
    return drivers.slice(0,-1)
  }
  function removeFirstDriver() {
    return drivers.slice(1)
  }