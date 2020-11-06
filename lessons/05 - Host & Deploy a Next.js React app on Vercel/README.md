# 📓 Lesson 05: Host & Deploy a Next.js React app on Vercel

In order for someone to buy your products, your store needs to be publicly available.

Vercel is a hosting and deployment solution that works perfectly with Next.js—they're the ones who made it! We can use Vercel to easily deploy our site from GitHub and automatically update our store any time we add any changes.

## Getting Started

In lesson 5, we'll walk through what actually happens when Next.js builds a project.

Once we we have that down, we'll first set up our project on GitHub and follow up by importing that project to Vercel, allowing us to host and deploy our app to the world.

Finally, once deployed, we'll learn what happens when we make a change and how we can update our app on the web.

## Objectives
* Review what happens when Next.js builds a project
* Add a Next.js project to GitHub
* Import a GitHub project into Vercel
* Understand how changes trigger new deploys

## Exercises

> 👋 **Hey! Quick Note**
>
> For this lesson, we'll be working inside of GitHub and Vercel. There will be no code changes for these exercises. If you haven't already created a GitHub or Vercel accounts, now is the time to get those set up.

### 1. What happens when Next.js builds a project?

Before we actually try to put our project on the internet, it's worth taking a minute to get a better understanding of what's actually happening.

Whenever Next.js builds a project, it goes through a process that tries to determine what content is static, what content is dynamic and needs to be rendered by a server, and if you have any lambda functions that need to be deployed.

For the first exercise, try running the build script in the project and reading the output. You can do that by running the following:
```
npm run build
```

#### Resources
* [Build - Next.js CLI](https://nextjs.org/docs/api-reference/cli#build) (nextjs.org)
* [Automatic Static Optimization](https://nextjs.org/docs/advanced-features/automatic-static-optimization) (nextjs.org)

### 2. Setting up a Next.js project with GitHub

When creating a new project with Next.js, or if you're working out of this workshop repository, Next.js already creates a Git history which starts with the first commit from Next.js.

Regardless, we want to set up a new GitHub respository in our GitHub account and then add our local Next.js project to that repository.

Add your existing Next.js project to a new GitHub repository.

#### Resources
* [Adding an existing project to GitHub using the command line](https://docs.github.com/en/free-pro-team@latest/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line) (docs.github.com)

### 3. Importing a new Next.js project to Vercel from GitHub

### 4. Understanding how changes automatically get deployed

## Extra Credit

### 1. Customizing your Vercel project domain
