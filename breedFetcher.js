const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    let prompt = null;
    let description = null;

    if (error) {
      prompt = error;
    } else if (response && response.statusCode !== 200) {
      prompt = response.statusCode;
    } else {
      const data = JSON.parse(body);
      if (!data.length) {
        prompt = 'The breed queried is not found!';
      } else {
        description = data[0].description;
      }
    }
    
    callback(prompt, description);
  });
};

module.exports = { fetchBreedDescription };