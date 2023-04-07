import Stripe from "stripe";

const stripeApiKey = "sk_test_4eC39HqLyjWDarjtT1zdp7dc";
const stripe = new Stripe(stripeApiKey);

const charges = await stripe.charges.list({
  limit: 3,
});

console.log(charges);
