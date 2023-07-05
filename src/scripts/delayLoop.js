const delayLoop5 = function() {
  return new Promise(resolve => {
    setTimeout(() => { resolve('')}, 5000);
  });
}

const delayLoop30 = function() {
  return new Promise(resolve => {
    setTimeout(() => { resolve('')}, 30000);
  });
}

const delayLoop60 = function() {
  return new Promise(resolve => {
    setTimeout(() => { resolve('')}, 60000);
  });
}

const delayLoop90 = function() {
  return new Promise(resolve => {
    setTimeout(() => { resolve('')}, 90000);
  });
}

const delayLoop120 = function() {
  return new Promise(resolve => {
    setTimeout(() => { resolve('')}, 120000);
  });
}

export { delayLoop5, delayLoop30, delayLoop60, delayLoop90, delayLoop120 }