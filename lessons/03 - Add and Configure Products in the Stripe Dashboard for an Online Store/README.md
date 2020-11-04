# 📓 Lesson 03: Add and Configure Products in the Stripe Dashboard for an Online Store

Part of any ecommerce store starts with what you're trying to sell: the products.

Stripe has a lot of services to give you flexibility as a store manager and that starts with a management tool right in it's dashboard to add and manage the products of your store.

## Getting Started

For lesson 3, we'll be getting ourselves familiar with the Stripe dashboard and setting up our first products inside of Stripe.

We'll learn where we can find the product management page and actually add new products to Stripe. We'll then configure those products with the same details we used in [Lesson 02](https://github.com/colbyfayock/space-jelly-store-workshop/tree/main/lessons/02%20-%20Add%20a%20Grid%20of%20Products%20with%20Images%20to%20a%20Next.js%20React%20App) including the images and title.

## Objectives
* Locate Products in Stripe dashboard
* Walk through adding new products
* Find images from local lesson directory to add to products
* Identify important product attributes for application

## Exercises

> 👋 **Hey! Quick Note**
> 
> For this lesson, we'll be working inside of the Stripe dashboard. There will be no code changes for these exercises. If you haven't already created a Stripe account, now is the time to get that set up.

### 1. Familiarize yourself with the Stripe dashboard and find the product management section

If this is your first time browsing around the Stripe dashboard, there's a lot to see! 

Stripe is a powerful service that allows us to manage payments and the purchase details that go along with those payments including what products they bought and how much they cost.

Take some time to look around the Stripe dashboard, but particularly find the Products section which we'll use in our next exercise to add our products.

#### Where you should be looking
* [Stripe Dashboard](https://dashboard.stripe.com/dashboard) (dashboard.stripe.com)

### 2. Create your first products inside of Stripe

Now that we're familiar with our Stripe dashboard, we want to get started creating our products.

Inside of the products dashboard, we can add a new product which includes a few required fields including a Name and a Price.

We can use the same product titles that we used in Lesson 2 when adding our products to our app.

For the prices, we have a few options. We can customize our pricing model whether that includes a recurring fee or volume pricing, but for our walkthrough, we're going to stick with the Standard model with a One time payment.

Create a new product for each product in the app.

> 👋 **Hey! Quick Note**
> 
> If you want to continue following along with the same 3 products I'm using in this walkthrough, you can use the following prices:
> 
> | Product Title        | Product Price |
> | -------------------- | ------------  |
> | Space Jelly Tshirt   | $20.00        |
> | Space Jelly Stickers | $10.00        |
> | Space Jelly Combo    | $25.00        |

#### Where you should be looking
* [Stripe Dashboard - Products](https://dashboard.stripe.com/products) (dashboard.stripe.com)

#### Resources
* [How to create products and prices](https://support.stripe.com/questions/how-to-create-products-and-prices) (support.stripe.com)

### 3. Customize the products with images

While product images are optional for Stripe, adding them is helpful for providing a better checkout experience for our customers. Particular, when someone proceeds to purchase the products, Stripe will use the product images as a thumbnail so our customers can understand through the whole process what exactly they're going to purchase.

Use the same images from Lesson 2 to add a picture to each product in Stripe.

### 4. Understand what product identifiers we'll need for later

At this point we should have all of our products set up and get ready to go including the product title and an image so customers know what they're purchasing.

After creating each product though, you may have noticed that you immediately get unique identifiers for different parts of the product including an overall product ID but also an API ID for each price.

You can think of this like you have a product, but each product has a different variation. If I'm selling tickets to a concert that have differnet pricing points, I might use two different prices to distinguish between a cheaper option and more expensive option.

While we aren't currently using these IDs in our app, we'll use the API ID to let Stripe know exactly what product our customers are purchasing in future lessons.

#### Where you should be looking
* [Stripe Dashboard - Products](https://dashboard.stripe.com/products) (dashboard.stripe.com)
