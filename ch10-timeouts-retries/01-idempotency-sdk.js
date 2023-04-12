const Stripe = require("stripe");
const stripe = Stripe("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
stripe.charges.create(
  {
    amount: 2000,
    currency: "usd",
    source: "tok_visa",
    description: "My First Test Charge",
  },
  {
    idempotencyKey: "s6h1VFnLSNjEFTxB",
  },
  function (err, charge) {
    // asynchronously called
  }
);
