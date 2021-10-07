const { fetchBreedDecription } = require('./breedFetcher');

const breedName = process.argv[2];
const done = (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
};

fetchBreedDecription(breedName, done);