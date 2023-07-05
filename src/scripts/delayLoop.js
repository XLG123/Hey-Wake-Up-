const delayLoop = function() {
  return new Promise(resolve => {
    setTimeout(() => { resolve('')}, 5000);
  })
}

export { delayLoop }