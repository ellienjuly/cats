const request = require('request');
let breed = process.argv.slice(2);

let apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(apiUrl, (error, response) => {
 
  if (!response) {
    console.log("Error content:", error);
    return error;
  }

  const data = JSON.parse(response.body);
  if (data.length < 1) {
    console.log(`Breed '${breed}' doesn't exit in the system`);
    return;
  } else {
    console.log(data[0].description);
  }
});