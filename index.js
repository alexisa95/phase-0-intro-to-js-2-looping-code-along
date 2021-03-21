function writeCards (names, eventName) {
  const response = [];
  for (let i = 0; i<names.length; i++) {
    response.push (`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return response;
}

function countDown (num) {
  for (let i=num; i >=0; i--) {
    console.log (i);
  }
}