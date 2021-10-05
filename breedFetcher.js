const request = require('request');

const breedFetcher = function(name) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;
  request(url, (error, response, body) => {
    if (error) {
      console.log('error:', error);
      return;
    }
    if (response && response.statusCode !== 200) {
      console.log('statusCode:', response.statusCode);
      return;
    }

    const data = JSON.parse(body);
    if (!data.length) {
      console.log('The breed queried is not found!');
      return;
    }
    console.log(data[0].description);

  });
};

const breed = process.argv[2];
breedFetcher(breed);