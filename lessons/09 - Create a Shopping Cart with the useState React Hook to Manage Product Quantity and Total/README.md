# 📓 Lesson 09: Create a Shopping Cart with the useState React Hook to Manage Product Quantity and Total

If we're fortunate enough, not only will people want to buy one item from our store, they'll want to buy multiple. To do that, we need to provide a shopping cart, which allows us to store what items the customer wants to buy, how many of them, and how much these items will cost.

To do this, we can take advantage of React's built-in state management hooks to make sure we're accurately keeping track of their order.

## Getting Started

In lesson 9, we're going to use the [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook from React to create a local shopping cart state for our app.

We'll learn how to create a new state instance, configure it for our cart state, and create a new function that when triggered, initiates checkout based off of that cart state.

## Objectives
* Add placeholder total cost and quantity to the homepage
* Create local cart state using useState
* Update cart UI to use local cart state
* Create function that adds item to cart
* Update Buy Now button to add item to cart state
* Add Checkout Button to initiate Stripe Checkout from Cart

## Exercises

🕵️‍♂️ Use the `@lesson-09-todo` key to search for this lesson's assignments in the code!

### 1. Add a placeholder shopping cart on the homepage

In order to build a shopping cart, we first need that shopping cart to exist.

While shopping carts can include a lot of information, they typically include two primary attributes: total quantity and total cost.

Add a placeholder shopping cart to the homepage that includes a total quantity and total cost.

#### Where We'll Make Changes
* `pages/index.js`

### 2. Create a local cart state using the useState hook

When managing a shopping cart, we'll need a way to store the current "state" of our shopping cart, along with a way to update that "state" any time someone wants to add a new product to their shopping cart.

To do that, we can use the useState hook from React which allows us to manage a local state right in our component.

Add a new instance of local state using the useState hook.

#### Where We'll Make Changes
* `pages/index.js`

#### Resources
* [useState - React](https://reactjs.org/docs/hooks-reference.html#usestate) (reactjs.org)

### 3. Create a function that adds an item to the cart

Our shopping cart is dynamically being managed by local state. Now let's take advantage of it and create the ability to add something to our cart.

Create a new function that when triggered, adds an item to the local cart state

> 👋 **Hey! Quick Note**
>
> This function will need to dynamically add a product to the cart state using a unique identifier. Use an argument with the function similar to `initiateCheckout` that will allow you to know what product to add to the cart.

#### Where We'll Make Changes
* `pages/index.js`

### 4. Configure the shopping cart to use local cart state

Now that we have our local cart state, we can update our placeholder shopping cart to use that state.

That means, any time we make any changes in the future, that shopping cart will immediately update to reflect our current shopping cart state.

Update the shopping cart to dynamically use the local cart state.

#### Where We'll Make Changes
* `pages/index.js`

#### Resources
* [Using the State Hook - React](https://reactjs.org/docs/hooks-state.html) (reactjs.org)
* [Destructuring the Fundamentals of React Hooks](https://www.colbyfayock.com/2019/04/destructuring-the-fundamentals-of-react-hooks/) (colbyfayock.com)

### 5. Update the Buy button to add products to the local cart state

With our function that adds a product to the shopping cart, we can set up the Buy button for each of our products to trigger that function, adding that product to our local cart state.

Update the click handler on the Buy button to trigger the add to cart function.

#### Where We'll Make Changes
* `pages/index.js`

### 6. Add a checkout button that initiates Stripe Checkout from the shopping cart

We have our locally managed shopping cart! But we don't have a way to purchase our products anymore.

Now that we have our local cart state, we can create a way to trigger and use our previously created `initiateCheckout` to add all of those items to a new Checkout session.

Create a Checkout link or button that triggers the `initiateCheckout` function including all of the items in the cart state.

#### Where We'll Make Changes
* `pages/index.js`