const autocannon = require('autocannon');

const stressTest = autocannon({
  url: 'http://localhost/api/gltf/get_gltf/crop_top',
  method: 'GET',
  duration: 10,
  connections: 10, 
});

autocannon.track(stressTest);

stressTest.on('done', () => {
  console.log('Test completed');
});
