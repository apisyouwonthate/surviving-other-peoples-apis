const response = await fetch(`https://api.stripe.com/v1/charges?limit=10`, {
  headers: {
    Authorization: "Bearer sk_test_4eC39HqLyjWDarjtT1zdp7dc",
  },
});
const responseData = await response.json();
const charges = responseData.data;

console.log(charges);
