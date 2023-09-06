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

const delayLoop45 = function() {
  return new Promise(resolve => {
    setTimeout(() => { resolve('')}, 45000);
  });
}

const delayLoop60 = function() {
  return new Promise(resolve => {
    setTimeout(() => { resolve('')}, 60000);
  });
}

export { delayLoop5, delayLoop30, delayLoop45, delayLoop60 }