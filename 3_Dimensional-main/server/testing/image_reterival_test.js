const autocannon = require('autocannon');

const instance = autocannon({
  url: 'http://localhost:3000/api/material/get/image/cotton',
  method: 'GET',
  duration: 20,
  connections: 10, 
});

autocannon.track(instance);

instance.on('done', () => {
  console.log('Test completed');
});
