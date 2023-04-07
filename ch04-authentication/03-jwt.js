// Set up the JWT payload with the user's ID
const payload = { user_id: 12345 };

// Encode the JWT using a secret key
const jwtToken = jwt.sign(payload, "my_secret_key");

// Set up the API request headers with the JWT
const headers = {
  Authorization: `Bearer ${jwtToken}`,
  "Content-Type": "application/json",
};

// Make a request to the API to get information about a dog breed
fetch("https://api.dogs.com/breeds/golden_retriever", {
  method: "GET",
  headers,
})
  .then((response) => response.json())
  .then((breedInfo) => {
    console.log(
      `Golden retrievers are ${breedInfo.temperament} and weigh around ${breedInfo.weight.imperial} pounds.`
    );
  })
  .catch((error) => {
    console.error("Error:", error);
  });
