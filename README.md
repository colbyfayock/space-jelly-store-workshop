# 🛒 Create an eCommerce Store with Next.js and Stripe Checkout

* Demo: https://space-jelly-store.netlify.app/

In this workshop you'll learn how to build a new ecommerce store from scratch using Next.js and Stripe Checkout.

* [Workshop Overview](#workshop-overview)
* [Who Am I?](#who-am-i)
* [Before the Workshop](#before-the-workshop)
* [During the Workshop](#during-the-workshop)

## 🔍 Workshop Overview
Excited to learn? You should be! Here's some of the stuff we'll learn in this workshop:
* Create a new Next.js app from scratch
* Add and manage a dynamic grid of products
* Set up and configure products in Stripe
* Manage local state with React's useState hook
* Create a custom React hook
* Use the React Context API to manage global state
* Store and persist app state with localstorage
* Integrate Stripe Checkout to let people purchase your products
* Deploy an app to Vercel

## 👨‍🚀 Who Am I?
I'm Colby Fayock! 👋

Learning by doing is the best way to learn something new and that’s the approach I take when I help others learn about Javascript, React, and the static web through [writing](https://www.freecodecamp.org/news/author/colbyfayock/), [videos on Youtube](https://www.youtube.com/colbyfayock), and [courses on egghead.io](https://egghead.io/instructors/colby-fayock?af=atzgap).

I try to bring this passion from my work tackling challenges like high scale video streaming services, ecommerce with [ThinkGeek](https://twitter.com/thinkgeek), satellite dashboards, and working as a Developer Advocate for [Applitools](https://applitools.com/).

In addition to all of my other work, I've published two books [Jamstack Handbook](https://jamstackhandbook.com/) — which includes everything you need to know about the Jamstack with 3 step-by-step tutorials — and [50 Projects for React and the Static Web](https://50reactprojects.com/) — which is a free ebook that includes 50 project ideas complete with project briefs, resources, and even design layout ideas.

You can also find me on Twitter at [@colbyfayock](https://twitter.com/colbyfayock)!

## 🧰 Before the Workshop

There's really one thing you would ideally have done before we jump into the workshop:
* Make sure you're set up with the minimum environment requirements

### Environment Requirements
There's also only one thing that is probably considered a "strict" requirement for the workshop:
* [node](https://nodejs.org/en/)

The **operating system** you use shouldn't matter as long as you can run commands with npm (or yarn if that's your thing).

If you can run `npm -v`, you should be good to go.

### Setting Up the Project
Once you verified you have all of the environment requirements, we can get started by cloning this repository.
* Navigate to the folder you'd like to work in
* Run:
```
git clone https://github.com/colbyfayock/space-jelly-store-workshop
cd space-jelly-store-workshop
```

All of the lessons are contained in their own individual directory within the lessons folder.

For each lesson, you can start from scratch by navigating to that lesson's directory and running:
```
npm install
```

This will install all of the required dependencies to get started for the lesson.

### Starting Up the Project
After all of the dependencies are installed for the lesson, you should be good to go!
* Run:
```
npm run dev
```

This should kick off a new server available at http://localhost:3000.

If you've successfully started up your development server, you should be ready to go for the workshop!

### What's In This Project?
TODO

## 🖥 The Workshop

### Lessons Structure

Each lesson is broken out into it's own directory under the lessons folder. Each contain's its own set of dependencies (though most are the same) as well as its own project code that we'll use to work through the exercise.

You'll find a README.md at the top of each lesson. This will give you an overview and instructions for that particular lesson as well as what files you'll need to work through.

As you're working through the lesson, you can use designated keys to find locations in the code where changes should be made. These keys can be used by searching for them in your code editor. The keys available are:
* `@lesson-##-todo`
* `@lesson-##-answer`

For example, if we want to find all of the spots where we should be working for lesson 2, we can use the `@lesson-02-todo` key to find those files and locations.

### Lesson Plan

* [00 - Introduction](https://github.com/colbyfayock/space-jelly-store-workshop/tree/main/lessons/00%20-%20Introduction)
* [01 - Create a New React Application with Next.js](https://github.com/colbyfayock/space-jelly-store-workshop/tree/main/lessons/01%20-%20Create%20a%20New%20React%20Application%20with%20Next.js)
* [02 - Add a Grid of Products with Images to a Next.js React App](https://github.com/colbyfayock/space-jelly-store-workshop/tree/main/lessons/02%20-%20Add%20a%20Grid%20of%20Products%20with%20Images%20to%20a%20Next.js%20React%20App)
* [03 - Add and Configure Products in the Stripe Dashboard for an Online Store](https://github.com/colbyfayock/space-jelly-store-workshop/tree/main/lessons/03%20-%20Add%20and%20Configure%20Products%20in%20the%20Stripe%20Dashboard%20for%20an%20Online%20Store)
* [04 - Dynamically Manage a Grid of Products in an Online Store with a JSON Document](https://github.com/colbyfayock/space-jelly-store-workshop/tree/main/lessons/04%20-%20Dynamically%20Manage%20a%20Grid%20of%20Products%20in%20an%20Online%20Store%20with%20a%20JSON%20Document)
* [05 - Host & Deploy a Next.js React app on Vercel](https://github.com/colbyfayock/space-jelly-store-workshop/tree/main/lessons/05%20-%20Host%20%26%20Deploy%20a%20Next.js%20React%20app%20on%20Vercel)
* [06 - Configure a Stripe Checkout Domain for Client-Only Integration](https://github.com/colbyfayock/space-jelly-store-workshop/tree/main/lessons/06%20-%20Configure%20a%20Stripe%20Checkout%20Domain%20for%20Client-Only%20Integration)
* [07 - Add a Stripe API Key as an Environment Variable in Next.js & Vercel](https://github.com/colbyfayock/space-jelly-store-workshop/tree/main/lessons/07%20-%20Add%20a%20Stripe%20API%20Key%20as%20an%20Environment%20Variable%20in%20Next.js%20%26%20Vercel)
* [08 - Add a Buy Now Button and Integrate Stripe Checkout to Purchase Products in a Next.js Online Store](https://github.com/colbyfayock/space-jelly-store-workshop/tree/main/lessons/08%20-%20Add%20a%20Buy%20Now%20Button%20and%20Integrate%20Stripe%20Checkout%20to%20Purchase%20Products%20in%20a%20Next.js%20Online%20Store)
* [09 - Create a Shopping Cart with the useState React Hook to Manage Product Quantity and Total](https://github.com/colbyfayock/space-jelly-store-workshop/tree/main/lessons/09%20-%20Create%20a%20Shopping%20Cart%20with%20the%20useState%20React%20Hook%20to%20Manage%20Product%20Quantity%20and%20Total)
* [10 - Create a Custom React Hook to Manage Cart State](https://github.com/colbyfayock/space-jelly-store-workshop/tree/main/lessons/10%20-%20Create%20a%20Custom%20React%20Hook%20to%20Manage%20Cart%20State)
* [11 - Use the React Context API to Globally Manage Cart State in a Next.js App](https://github.com/colbyfayock/space-jelly-store-workshop/tree/main/lessons/11%20-%20Use%20the%20React%20Context%20API%20to%20Globally%20Manage%20Cart%20State%20in%20a%20Next.js%20App)
* [12 - Store and Load Cart State from Local Storage to Persist the Shopping Cart When Reloading the Page](https://github.com/colbyfayock/space-jelly-store-workshop/tree/main/lessons/12%20-%20Store%20and%20Load%20Cart%20State%20from%20Local%20Storage%20to%20Persist%20the%20Shopping%20Cart%20When%20Reloading%20the%20Page)
* [13 - Use Next.js Dynamic Routes to Create Product Pages for an Online Store](https://github.com/colbyfayock/space-jelly-store-workshop/tree/main/lessons/13%20-%20Use%20Next.js%20Dynamic%20Routes%20to%20Create%20Product%20Pages%20for%20an%20Online%20Store)
* [14 - Create a Shopping Cart Page to Manage Products to Purchase in a Next.js App](https://github.com/colbyfayock/space-jelly-store-workshop/tree/main/lessons/14%20-%20Create%20a%20Shopping%20Cart%20Page%20to%20Manage%20Products%20to%20Purchase%20in%20a%20Next.js%20App)
* [15 - Add a Quantity Input to the Cart Page to Add or Remove Items from a Shopping Cart in Next.js](https://github.com/colbyfayock/space-jelly-store-workshop/tree/main/lessons/15%20-%20Add%20a%20Quantity%20Input%20to%20the%20Cart%20Page%20to%20Add%20or%20Remove%20Items%20from%20a%20Shopping%20Cart%20in%20Next.js)

## 🎓 After the Workshop


### Feedback

The good, the bad -- I want to know! I would really appreciate you taking any time to hop in this survey and be honest about your experience with the workshop. Please take into consideration both how much you've enjoyed the workshop and how much you felt you've learned.

[Take the survey!](https://forms.gle/Lt2Z5hrGm6UWAApa6)

Or https://forms.gle/Lt2Z5hrGm6UWAApa6
