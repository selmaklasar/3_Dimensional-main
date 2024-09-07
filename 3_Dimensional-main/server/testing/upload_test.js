const autocannon = require('autocannon');
const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'test_material.jpg'); // Ensure this path is correct

const instance = autocannon({
  url: 'http://localhost:3000/api/material/upload/material',
  method: 'POST',
  requests: [
    {
      method: 'POST',
      path: '/api/material/upload/material',
      setupRequest: (req) => {
        // Define the boundary
        const boundary = '----WebKitFormBoundary7MA4YWxkTrZu0gW';
        
        // Read the file to upload
        const filedata = fs.readFileSync(filepath);
        
        // Construct the body
        const body = [
          `--${boundary}`,
          `Content-Disposition: form-data; name="file"; filename="test_material.jpg"`,
          `Content-Type: image/jpeg`,
          '',
          filedata,
          `--${boundary}`,
          `Content-Disposition: form-data; name="type"`,
          '',
          'cotton',  // Send the type as form data
          `--${boundary}--`
        ].join('\r\n');

        // Set the headers
        req.headers['Content-Type'] = `multipart/form-data; boundary=${boundary}`;
        req.body = Buffer.from(body, 'binary');

        return req;
      }
    }
  ],
  duration: 10, // duration of the test in seconds
  connections: 1, // number of concurrent connections
});

// Track the instance
autocannon.track(instance);

// Log when the test is done
instance.on('done', () => {
  console.log('Test completed');
});
