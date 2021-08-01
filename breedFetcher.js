const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(url, (error, response) => {
    if (!response) {
      console.log("Error content:", error);
      return error;
    }

    const data = JSON.parse(response.body);
    if (data.length < 1) {
      console.log(`Breed '${breedName}' doesn't exit in the system`);
      return;
    } else {
      callback(error, data[0].description);
      return;
    }
  });
};

module.exports = { fetchBreedDescription };