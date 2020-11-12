# 📓 Lesson 08: Add a Buy Now Button and Integrate Stripe Checkout to Purchase Products in a Next.js Online Store

Now that we have an app and our products configure in Stripe, it's time to connect the two and give people a way to purchase our products.

Using Stripe's API, we can initiate a new instance of the Stripe Checkout flow with a simple click of a button.

## Getting Started

In lesson 8, we're going to connect our project to Stripe and make our first test purchase!

We'll start off by adding a Buy button which allow us to trigger the purchase process, then add in the Stripe JavaScript library which will let us communicate with Stripe to create the order.

## Objectives
* Add a Buy Now button to each product
* Set up function to initiate checkout
* Trigger function when someone clicks the purchase button
* Install and import Stripe library
* Configure Stripe Checkout initiation
* Update button to pass in dynamic product attributes
* Test checkout flow with Stripe

## Exercises

🕵️‍♂️ Use the `@lesson-08-todo` key to search for this lesson's assignments in the code!

### 1. Add a Buy button to each product card

We have our list of products, but we currently don't have a way to let our customers purchase them.

The first thing we need is a button. That button, which we can name "Buy" or any other purchase-like action, will be added to each product which will eventually trigger checkout for that product.

Add a new HTML button to each product card.

#### Where We'll Make Changes
* `pages/index.js`

### 2. Create a new function to initiate checkout process

In order to start the checkout initiation process, we're going to need to interface with the Stripe API. We'll also need some way to trigger this functionality in one spot anywhere in our app.

We can create custom functions that live in external files in our app that allow us to import them anywhere in our project to trigger custom functionality.

Create a new function in the `lib/payments.js` file that will allow us to initiate checkout.

> 👋 **Hey! Quick Note**
>
> While you can name this new function anything you'd like, I'll be using `initiateCheckout` for the remainder of the lessons.

#### Where We'll Make Changes
* `lib/payments.js`

### 3. Trigger the checkout process when the Buy button is clicked

By default, the button element takes in event handlers that allow us to trigger functionality on specific events--like when that button is clicked.

We can use that event handler to initiate the checkout process whenever someone wants to buy one of our products.

Add an event handler to the product buttons that triggers the checkout function created in Exercise 2.

#### Where We'll Make Changes
* `pages/index.js`

#### Resources
* [Handling Events - React](https://reactjs.org/docs/handling-events.html) (reactjs.org)

### 4. Install the Stripe JavaScript library to the project

Now that we're ready to interface with Stripe and their API, we can add their library to our project which already includes a lot of the code we need to make the checkout process happen.

Use npm to add the Stripe JS library from [npmjs.com](npmjs.com).

#### Where you should be looking
* Your terminal

#### Where We'll Make Changes
* `package.json` (changes will be automated)

#### Resources
* [@stripe/stripe-js](https://www.npmjs.com/package/@stripe/stripe-js)

### 5. Configure Stripe Checkout with the checkout initiation

With the Stripe JS library imported, we can actually configure out app to run that code.

Inside of the `iniateCheckout` function we created earlier, we can initialize the Stripe library, then create a new checkout session that we'll redirect our users to.

Update the `initiateCheckout` function created earlier to create and redirect a customer to a new session.

> 👋 **Hey! Quick Note**
>
> In order for us to dynamically purchase mutiple products, we'll need to create an argument for our function. We can add an argument for `lineItems` which we can use directly with the Stripe library.

#### Where We'll Make Changes
* `lib/payments.js`

#### Resources
* [redirectToCheckout - Stripe](https://stripe.com/docs/js/checkout/redirect_to_checkout)

### 6. Update the Buy button to dynamically pass product attributes

We've configured out `initateCheckout` function to interface with Stripe, but right now, it's not actually working. That's because we haven't set our product button to dynamically tell Stripe which product we want to purchase.

Inside of our button component, we can update our event handler to create a new function and dynamically pass the unique attributes of the individual product to our `initiateCheckout` function.

Update the button to dynamically create a checkout session for each product

### 7. Place a test order to test purchasing a product

Our checkout process should now be ready to go, now's the time we've been waiting for!

Take a minute to try purchasing one (or all) of the products in your new store.

You should be able to individually purchase each item, run through checkout, and successfully complete an order using Test data with Stripe.

> 👋 **Hey! Quick Note**
>
> Inside Stripe, you should still have Test Data enabled. This means that the purchases you make won't actually do anything until we make the store live!

#### Where you should be looking
* http://localhost:3000
* Your deployed project