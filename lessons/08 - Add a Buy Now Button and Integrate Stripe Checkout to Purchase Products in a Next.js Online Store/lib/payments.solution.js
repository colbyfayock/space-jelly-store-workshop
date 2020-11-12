import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

/**
 * @lesson-08-solution Exercise 2
 * We can create and immediately export a new async function which will allow
 * us to perform our Stripe initiation from somewhere else in our app.
 */

export async function initiateCheckout({ lineItems } = {}) {
  /**
   * @lesson-08-solution Exercise 5
   * When we load Stripe from the library, we can make sure we first
   * wait for it to load. Once loaded we can take advantage of the
   * redirectToCheckout method which along with some required parameters
   * will send our customer to a Stripe Checkout session.
   */

  const stripe = await stripePromise;

  await stripe.redirectToCheckout({
    mode: 'payment',
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
}