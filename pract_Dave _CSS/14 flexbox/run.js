const request = require('request');

request.get('https://coderbyte.com/api/challenges/json/rest-get-simple', function(err, response, body) {
  if (err) {
    console.error(err);
    return;
  }

  if (response.statusCode === 200) {
    const data = JSON.parse(body);
    const hobbies = data.hobbies;
    console.log(hobbies.join(', '));
  } else {
    console.error('Failed to get data. Response code:', response.statusCode);
  }
});
