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

Now that we have a project on GitHub, we're ready to dig into Vercel and get this thing deployed!

Vercel makes the process relatively painless with it's import wizard and bonus, they can even detect it's a Next.js app!

Import your GitHub repository to Vercel.

#### Resources
* [Deploy an Existing Project - Vercel](https://vercel.com/docs/introduction#deploy-an-existing-project) (vercel.com)
* [Import Git Repository - Vercel](https://vercel.com/import) (vercel.com)

### 4. Understanding how changes automatically get deployed

Because we connected our project from GitHub to Vercel, we automatically can take advantage of automatic deployments from our main branch on GitHub straight to Vercel. This means, once we push or merge a change to our main branch, it will automatically update on the web!

We can test this out by making an arbitrary change in our project, like the page title, and seeing that change update right on our project.

Make a simple text change (or anything you really want) and push it to GitHub. Once there, find the deployments in Vercel and watch as that change automatically deploys.

#### Resources
* [Git Deployments - Vercel](https://vercel.com/docs/platform/deployments#git) (vercel.com)

## Extra Credit

### 1. Customizing your Vercel project subdomain (optional)

When importing a project into Vercel, Vercel will attempt to use the name of that project for the subdomain name, looking something along the lines of:
```
[project-name].vercel.app
```

The good news, is this is completely customizable. Once inside of your project settings in Vercel, you can find the Domains section and change that to what you want as long as it's available.

> Bonus: if you have a custom domain name already registered, you can even set that up to work with Vercel!

Optional: update your project's subdomain to something you'd like!

#### Resources
* [Custom Domains - Vercel](https://vercel.com/docs/custom-domains) (vercel.com)
