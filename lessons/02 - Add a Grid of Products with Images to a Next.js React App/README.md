# Lesson 02: Add a Grid of Products with Images to a Next.js React App

The core of any shopping experience is simply being able to see what the store has to offer! This includes what products are available and how much each one of them costs.

While we can do this in a variety of ways, a common way is to show a grid of products where we can see everything the store has to offer (or a lot of it). Using some HTML and CSS, we can create our product grid allowing our customers a look into our store.

## Getting Started

For our second lesson, we're going to put together a product grid using some HTML and CSS.

We'll start off by updating the default Next.js template to include our products instead of links to the Next.js docs. Then, we'll import some images for our products that will already be available in this lesson folder so we can show what our products look like. Finally, we'll make some basic CSS changes to the default Next.js template to make sure we're providing a good experience to our customers.

## Objectives
* Add products to the app
* Import product images and add to each product
* Update the default page styles

## Exercises

### 1. Add some products to the homepage of an online store

To get started adding our products to the app, we can take advantage of the default grid that Next.js comes with out of the box on the homepage.

The grid we'll use is already set up to use [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) that includes card-like components that contain information. So, we'll re-use those same cards to add our product information to our app.

> 👋 **Hey! Quick Note**
> 
> For this exercise you'll also want to think of some products that you'd like to add. If you want to follow along, you can use the following products:
> 1. Tshirt
>     * Title: Space Jelly Tshirt
>     * Description: Bring Cosmo the space Jellyfish to your wardrobe with this high quality tshirt.
> 2. Stickers
>     * Title: Space Jelly Stickers
>     * Description: Add some flare to your laptop with a sticker of Cosmo the Space Jellyfish.
> 3. Tshirt & Stickers Combo
>     * Title: Space Jelly Combo
>     * Description: Show your love for Cosmo with a tshirt and sticker combo pack!

Update the cards on the homepage to include the title and description of each product.

#### Where We'll Make Changes
* `pages/index.js`

### 2. Import local images into the app for each product

When shopping on the internet, people want to see what they're buying!

> For this exercise, similar to the last, you can follow along and use the images available inside of the `public/images` directory.

#### Where We'll Make Changes
* `pages/index.js`

### 3. Change the product grid into an unordered list for better accessibility

#### Where We'll Make Changes
* `pages/index.js`

### 4. Update the app styles for a better user experience

#### Where We'll Make Changes
* `styles/Home.module.css`
