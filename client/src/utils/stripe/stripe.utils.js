import { loadStripe } from "@stripe/stripe-js";
console.log(import.meta.env.VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY);
export const stripePromise = loadStripe(
  import.meta.env.VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY
);
