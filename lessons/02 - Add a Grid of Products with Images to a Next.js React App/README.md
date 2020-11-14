# 📓 Lesson 02: Add a Grid of Products with Images to a Next.js React App

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

🕵️‍♂️ Use the `@lesson-02-todo` key to search for this lesson's assignments in the code!

### 1. Add some products to the homepage of an online store

To get started adding our products to the app, we can take advantage of the default grid that Next.js comes with out of the box on the homepage.

The grid we'll use is already set up to use [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) that includes card-like components that contain information. So, we'll re-use those same cards to add our product information to our app.

Update the cards on the homepage to include the title and description of each product.

> 👋 **Hey! Quick Note**
>
> For this exercise you'll also want to think of some products that you'd like to add. If you want to follow along, you can use the following products:
>
> | Product Title        | Product Description |
> | -------------------- | ------------------  |
> | Space Jelly Tshirt   | Bring Cosmo the space Jellyfish to your wardrobe with this high quality tshirt. |
> | Space Jelly Stickers | Add some flare to your laptop with a sticker of Cosmo the Space Jellyfish. |
> | Space Jelly Combo    | Show your love for Cosmo with a tshirt and sticker combo pack! |

#### Where We'll Make Changes
* `pages/index.js`

### 2. Import local images into the app for each product

When shopping on the internet, believe it or not, people want to see what they're buying!

That means, we can show big descriptive images so our customers know exactly what they're going to get when they make it to their home.

Add an image above the title to each product card.

> 👋 **Hey! Quick Note**
>
> For this exercise, similar to the last, you can follow along and use the images available inside of the `public/images` directory that correspond to each of the products described above.

#### Where We'll Make Changes
* `pages/index.js`

### 3. Change the product grid into an unordered list for better accessibility

We want our websites to be accessible for all types of people. While it's someone may be able to figure out how to navigate around the project with the current HTML, it makes a little bit more sense to use the HTML list element, which would semanticaly describe our list of products.

Update the grid to be an unordered list (`<ul>`) that includes each card as a list item (`<li>`).

#### Where We'll Make Changes
* `pages/index.js`

### 4. Update the app styles for a better user experience

Between the default styles of an unordered list and some of the styles that come along with the Next.js default template, the look and feel of our application could use a little attention to make it easier to read and use.

Make some or all of the following changes to the product grid:
* Prevent product images from growing beyond 100% of their container
* Remove the list styling (bullets) of the unordered list
* Remove the default padding of the unordered list
* Update the product grid to display 3 columns when the window is over 960px wide
* Remove the border, border radius, and hover effects of the cards
* Add a shadow to the product image when hovering over a card
* Whatever else you'd like!

> 👋 **Hey! Quick Note**
>
> These styles won't persist to the next lesson, but this can be good practice to learn how to make CSS changes inside of a Next.js app.

#### Where We'll Make Changes
* `styles/Home.module.css`

#### Resources
* [Built-In CSS Support](https://nextjs.org/docs/basic-features/built-in-css-support) (nextjs.org)

## Extra Credit

### 1. Add the price of each product to the page

Our page currently shows a list of our products, but there's one important thing missing--how much does it cost?

Add the price of each item as another attribute on each product card.

#### Where We'll Make Changes
* `pages/index.js`
